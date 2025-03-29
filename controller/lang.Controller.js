const { Lang } = require("../models");

exports.createLang = async (req, res) => {
  try {
    const lang = await Lang.create(req.body);
    res.status(201).json(lang);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getLang = async (req, res) => {
  try {
    const langs = await Lang.findAll();
    res.status(200).json(langs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getLangById = async (req, res) => {
  try {
    const lang = await Lang.findByPk(req.params.id);
    if (!lang) {
      return res.status(404).json({ message: "Lang not found!" });
    }
    res.status(200).json(lang);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateLang = async (req, res) => {
  try {
    const [updated] = await Lang.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) {
      return res.status(404).json({ message: "Lang not found!" });
    }
    const updatedLang = await Lang.findByPk(req.params.id);
    res.status(200).json(updatedLang);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteLang = async (req, res) => {
  try {
    const deleted = await Lang.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      return res.status(404).json({ message: "Lang not found!" });
    }
    res.status(200).json({ message: "Lang deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};