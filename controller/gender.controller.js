const { Gender } = require('../models');

exports.createGender = async (req, res) => {
  try {
    const gender = await Gender.create(req.body);
    res.status(201).json(gender);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getGender = async (req, res) => {
  try {
    const genders = await Gender.findAll();
    res.status(200).json(genders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getGenderById = async (req, res) => {
  try {
    const gender = await Gender.findByPk(req.params.id);
    if (!gender) {
      return res.status(404).json({ message: 'Gender not found' });
    }
    res.status(200).json(gender);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateGender = async (req, res) => {
  try {
    const [updated] = await Gender.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) {
      return res.status(404).json({ message: 'Gender not found' });
    }
    const updatedGender = await Gender.findByPk(req.params.id);
    res.status(200).json(updatedGender);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteGender = async (req, res) => {
  try {
    const deleted = await Gender.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) {
      return res.status(404).json({ message: 'Gender not found' });
    }
    res.status(200).json({ message: 'Gender deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};