const { DeliveryMethod } = require("../models");

exports.createDelivery = async (req, res) => {
  try {
    const { name } = req.body;
    const newDeliveryMethod = await DeliveryMethod.create({ name });
    res.status(201).json(newDeliveryMethod);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getDelivery = async (req, res) => {
  try {
    const deliveryMethods = await DeliveryMethod.findAll();
    res.status(200).json(deliveryMethods);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getDeliveryById = async (req, res) => {
  try {
    const deliveryMethod = await DeliveryMethod.findByPk(req.params.id);
    if (!deliveryMethod) return res.status(404).json({ message: "Delivery method not found" });
    res.status(200).json(deliveryMethod);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateDelivery = async (req, res) => {
  try {
    const deliveryMethod = await DeliveryMethod.findByPk(req.params.id);
    if (!deliveryMethod) return res.status(404).json({ message: "Delivery method not found" });
    await deliveryMethod.update(req.body);
    res.status(200).json({ message: "Delivery method updated successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteDelivery = async (req, res) => {
  try {
    const deliveryMethod = await DeliveryMethod.findByPk(req.params.id);
    if (!deliveryMethod) return res.status(404).json({ message: "Delivery method not found" });
    await deliveryMethod.destroy();
    res.status(200).json({ message: "Delivery method deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
