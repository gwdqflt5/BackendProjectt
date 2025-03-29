const { HumenCategory } = require("../models");

exports.createHumen_category = async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = await HumenCategory.create({ name });
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getHumen_category = async (req, res) => {
  try {
    const categories = await HumenCategory.findAll();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getHumen_categoryById = async (req, res) => {
  try {
    const category = await HumenCategory.findByPk(req.params.id);
    if (!category) return res.status(404).json({ message: "Humen category not found" });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateHumen_category = async (req, res) => {
  try {
    const category = await HumenCategory.findByPk(req.params.id);
    if (!category) return res.status(404).json({ message: "Humen category not found" });
    const { name } = req.body; // 'category' o'rniga 'name' ishlatildi
    await category.update({ name });
    res.status(200).json({ message: "Humen category updated successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteHumen_category = async (req, res) => {
  try {
    const category = await HumenCategory.findByPk(req.params.id);
    if (!category) return res.status(404).json({ message: "Humen category not found" });
    await category.destroy();
    res.status(200).json({ message: "Humen category deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
