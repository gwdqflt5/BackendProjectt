// status.controller.js
const { Status } = require("../models");



exports.createStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const newStatus = await Status.create({ status });
    res.status(201).json(newStatus);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getStatus = async (req, res) => {
  try {
    const statuses = await Status.findAll();
    res.status(200).json(statuses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getStatusById = async (req, res) => {
  try {
    const status = await Status.findByPk(req.params.id);
    if (!status) return res.status(404).json({ message: "Status not found" });
    res.status(200).json(status);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateStatus = async (req, res) => {
  try {
    const status = await Status.findByPk(req.params.id);
    if (!status) return res.status(404).json({ message: "Status not found" });
    await status.update(req.body);
    res.status(200).json({ message: "Status updated successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteStatus = async (req, res) => {
  try {
    const status = await Status.findByPk(req.params.id);
    if (!status) return res.status(404).json({ message: "Status not found" });
    await status.destroy();
    res.status(200).json({ message: "Status deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
