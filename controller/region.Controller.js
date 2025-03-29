const { Region } = require("../models");

exports.createRegion = async (req, res) => {
  try {
    const region = await Region.create(req.body);
    res.status(201).json(region);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getRegion = async (req, res) => {
  try {
    const regions = await Region.findAll();
    res.status(200).json(regions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getRegionById = async (req, res) => {
  try {
    const region = await Region.findByPk(req.params.id);
    if (!region) return res.status(404).json({ message: "Region not found" });

    res.status(200).json(region);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateRegion = async (req, res) => {
  try {
    const region = await Region.findByPk(req.params.id);
    if (!region) return res.status(404).json({ message: "Region not found" });

    await region.update(req.body);
    res.status(200).json(region);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteRegion = async (req, res) => {
  try {
    const region = await Region.findByPk(req.params.id);
    if (!region) return res.status(404).json({ message: "Region not found" });

    await region.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};