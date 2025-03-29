const { Discount } = require("../models");

exports.createDiscount = async (req, res) => {
  try {
    const discount = await Discount.create(req.body);
    res.status(201).json(discount);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getDiscounts = async (req, res) => {
  try {
    const discounts = await Discount.findAll();
    res.status(200).json(discounts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getDiscountById = async (req, res) => {
  try {
    const discount = await Discount.findByPk(req.params.id);
    if (!discount) return res.status(404).json({ message: "Discount not found" });

    res.status(200).json(discount);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateDiscount = async (req, res) => {
  try {
    const discount = await Discount.findByPk(req.params.id);
    if (!discount) return res.status(404).json({ message: "Discount not found" });

    await discount.update(req.body);
    res.status(200).json(discount);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteDiscount = async (req, res) => {
  try {
    const discount = await Discount.findByPk(req.params.id);
    if (!discount) return res.status(404).json({ message: "Discount not found" });

    await discount.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
