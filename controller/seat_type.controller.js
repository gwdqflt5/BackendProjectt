const { SeatType } = require("../models");
const { validateSeatType } = require("../validations/seat_typeValidation");


const findSeatType = async (id, res) => {
  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }
  const seattype = await SeatType.findByPk(id);
  if (!seattype) {
    return res.status(404).json({ message: "SeatType not found" });
  }
  return seattype;
};


exports.createSeatType = async (req, res) => {
  try {
    const { error } = validateSeatType(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const seattype = await SeatType.create(req.body);
    return res.status(201).json(seattype);
  } catch (error) {
    console.error("Error creating seattype:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};


exports.getSeatTypes = async (req, res) => {
  try {
    const seattypes = await SeatType.findAll();
    return res.status(200).json(seattypes);
  } catch (error) {
    console.error("Error fetching seattypes:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};


exports.getSeatTypeById = async (req, res) => {
  try {
    const seattype = await findSeatType(req.params.id, res);
    if (!seattype) return;
    return res.status(200).json(seattype);
  } catch (error) {
    console.error("Error fetching seattype by ID:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};


exports.updateSeatType = async (req, res) => {
  try {
    const { error } = validateSeatType(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const seattype = await findSeatType(req.params.id, res);
    if (!seattype) return;

    await seattype.update(req.body);
    return res.status(200).json(seattype);
  } catch (error) {
    console.error("Error updating seattype:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};


exports.deleteSeatType = async (req, res) => {
  try {
    const seattype = await findSeatType(req.params.id, res);
    if (!seattype) return;

    await seattype.destroy();
    return res.status(200).json({ message: "SeatType deleted successfully" });
  } catch (error) {
    console.error("Error deleting seattype:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
