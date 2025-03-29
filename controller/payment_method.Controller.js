const { PaymentMethod } = require("../models");

exports.createPaymentMethod = async (req, res) => {
  try {
    const { name } = req.body;
    const newPaymentMethod = await PaymentMethod.create({ name });
    res.status(201).json(newPaymentMethod);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPaymentMethods = async (req, res) => {
  try {
    const paymentMethods = await PaymentMethod.findAll();
    res.status(200).json(paymentMethods);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPaymentMethodById = async (req, res) => {
  try {
    const paymentMethod = await PaymentMethod.findByPk(req.params.id);
    if (!paymentMethod) return res.status(404).json({ message: "Payment method not found" });
    res.status(200).json(paymentMethod);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePaymentMethod = async (req, res) => {
  try {
    const paymentMethod = await PaymentMethod.findByPk(req.params.id);
    if (!paymentMethod) return res.status(404).json({ message: "Payment method not found" });
    await paymentMethod.update(req.body);
    res.status(200).json({ message: "Payment method updated successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletePaymentMethod = async (req, res) => {
  try {
    const paymentMethod = await PaymentMethod.findByPk(req.params.id);
    if (!paymentMethod) return res.status(404).json({ message: "Payment method not found" });
    await paymentMethod.destroy();
    res.status(200).json({ message: "Payment method deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};