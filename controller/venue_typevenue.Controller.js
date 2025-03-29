const { VenueType } = require("../models")
const { venue_typevenueValidation } = require("../validations/venue_typevenueValidation")

exports.createVenue_typevenue = async (req, res) => {
  try {
    const { error } = venue_typevenueValidation(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    const venue_typevenue = await VenueType.create(req.body);
    res.status(201).json(venue_typevenue);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getVenue_typevenue = async (req, res) => {
  try {
    const venue_typevenue = await VenueType.findAll();
    return res.status(200).json(venue_typevenue);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getVenue_typevenueById = async (req, res) => {
  try {
    const venue_typevenue = await VenueType.findByPk(req.params.id);
    if (!venue_typevenue) return res.status(404).json({ message: "Venue_typevenue not found" });
    return res.status(200).json(venue_typevenue);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateVenue_typevenue = async (req, res) => {
  try {
    const { error } = venue_typevenueValidation(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const venue_typevenue = await VenueType.findByPk(req.params.id);
    if (!venue_typevenue) return res.status(404).json({ message: "Venue_typevenue not found" });

    await venue_typevenue.update(req.body);
    return res.status(200).json(venue_typevenue);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteVenue_typevenue = async (req, res) => {
  try {
    const venue_typevenue = await VenueType.findByPk(req.params.id);
    if (!venue_typevenue) return res.status(404).json({ message: "Venue_typevenue not found" });

    await venue_typevenue.destroy();
    return res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};