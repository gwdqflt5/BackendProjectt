const { Flat } = require("../models");

exports.createFlat = async (req, res) => {
  try {
    const flat = await Flat.create(req.body);
    res.status(201).json(flat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getFlats = async (req, res) => {
  try {
    const flats = await Flat.findAll();
    res.status(200).json(flats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getFlatById = async (req, res) => {
  try {
    const flat = await Flat.findByPk(req.params.id);
    if (!flat) return res.status(404).json({ message: "Flat not found" });

    res.status(200).json(flat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateFlat = async (req, res) => {
  try {
    const flat = await Flat.findByPk(req.params.id);
    if (!flat) return res.status(404).json({ message: "Flat not found" });

    await flat.update(req.body);
    res.status(200).json(flat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteFlat = async (req, res) => {
  try {
    const flat = await Flat.findByPk(req.params.id);
    if (!flat) return res.status(404).json({ message: "Flat not found" });

    await flat.destroy();
    res.sendStatus(204); // res.send() kerak emas
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
