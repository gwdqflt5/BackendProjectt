const { CustomerCard, Customer } = require("../models");
const { validateCustomerCard } = require("../validations/customerCardValidation");


const findCustomerCard = async (id, res) => {
  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }
  const customerCard = await CustomerCard.findByPk(id);
  if (!customerCard) {
    return res.status(404).json({ message: "Customer card not found" });
  }
  return customerCard;
};


exports.createCustomerCard = async (req, res) => {
  try {
    const { error } = validateCustomerCard(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const customerCard = await CustomerCard.create(req.body);
    return res.status(201).json(customerCard);
  } catch (error) {
    console.error("Error creating customer card:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};


exports.getCustomerCards = async (req, res) => {
  try {
    const customerCards = await CustomerCard.findAll();
    return res.status(200).json(customerCards);
  } catch (error) {
    console.error("Error fetching customer cards:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.getCustomerCardById = async (req, res) => {
  try {
    const customerCard = await CustomerCard.findByPk(req.params.id, {
      include: [
        {
          model: Customer,
          as: "customer",
        },
      ],
    });
    if (!customerCard) return;
    return res.status(200).json(customerCard);
  } catch (error) {
    console.error("Error fetching customer card by ID:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.updateCustomerCard = async (req, res) => {
  try {
    const { error } = validateCustomerCard(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const customerCard = await findCustomerCard(req.params.id, res);
    if (!customerCard) return;

    await customerCard.update(req.body);
    return res.status(200).json(customerCard);
  } catch (error) {
    console.error("Error updating customer card:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.deleteCustomerCard = async (req, res) => {
  try {
    const customerCard = await findCustomerCard(req.params.id, res);
    if (!customerCard) return;

    await customerCard.destroy();
    return res.status(200).json({ message: "Customer card deleted successfully" });
  } catch (error) {
    console.error("Error deleting customer card:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
