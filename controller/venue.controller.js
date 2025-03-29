const { Venue, Region, District } = require("../models");

exports.createVenue = async (req, res) => {
  try {
    const venue = await Venue.create(req.body);
    res.status(201).json(venue);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getVenues = async (req, res) => {
  try {
    const venues = await Venue.findAll();
    res.status(200).json(venues);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getVenueById = async (req, res) => {
  try {
    const venue = await Venue.findByPk(req.params.id, {
      include: [
        {
          model: Region,
          as: "region",
        },
        {
          model: District,
          as: "district",
        },
      ],
    });
    if (!venue) return res.status(404).json({ message: "Venue not found" });

    res.status(200).json(venue);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateVenue = async (req, res) => {
  try {
    const venue = await Venue.findByPk(req.params.id);
    if (!venue) return res.status(404).json({ message: "Venue not found" });

    await venue.update(req.body);
    res.status(200).json(venue);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteVenue = async (req, res) => {
  try {
    const venue = await Venue.findByPk(req.params.id);
    if (!venue) return res.status(404).json({ message: "Venue not found" });

    await venue.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
