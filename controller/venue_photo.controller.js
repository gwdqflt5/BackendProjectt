const { VenuePhoto, Venue } = require("../models");
const { validateVenuePhoto } = require("../validations/venue_photoValidation");

exports.createVenuePhoto = async (req, res) => {
  try {
    const { error } = validateVenuePhoto(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const venuePhoto = await VenuePhoto.create(req.body);
    return res.status(201).json(venuePhoto);
  } catch (error) {
    console.error("Error creating venue photo:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.getVenuePhotos = async (req, res) => {
  try {
    const venuePhotos = await VenuePhoto.findAll();
    return res.status(200).json(venuePhotos);
  } catch (error) {
    console.error("Error fetching venue photos:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.getVenuePhotoById = async (req, res) => {
  try {
    const venuePhoto = await VenuePhoto.findByPk(req.params.id, {
      include: [
        {
          model: Venue,
          as: "venue4",
        },
      ],
    });
    if (!venuePhoto) return res.status(404).json({ message: "Venue photo not found" });

    return res.status(200).json(venuePhoto);
  } catch (error) {
    console.error("Error fetching venue photo by ID:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.updateVenuePhoto = async (req, res) => {
  try {
    const { error } = validateVenuePhoto(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const venuePhoto = await VenuePhoto.findByPk(req.params.id);
    if (!venuePhoto) return res.status(404).json({ message: "Venue photo not found" });

    await venuePhoto.update(req.body);
    return res.status(200).json(venuePhoto);
  } catch (error) {
    console.error("Error updating venue photo:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.deleteVenuePhoto = async (req, res) => {
  try {
    const venuePhoto = await VenuePhoto.findByPk(req.params.id);
    if (!venuePhoto) return res.status(404).json({ message: "Venue photo not found" });

    await venuePhoto.destroy();
    return res.status(204).send();
  } catch (error) {
    console.error("Error deleting venue photo:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
