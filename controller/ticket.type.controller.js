const { TicketType } = require("../models");

exports.createTicketType = async (req, res) => {
  try {
    const { color, name, } = req.body;

    if (!color || !name) {
      return res.status(400).json({ error: "Color and Name are required!" });
    }

    const newTicketType = await TicketType.create({ color, name });
    res.status(201).json({ message: "Ticket type created!", data: newTicketType });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTicketTypes = async (req, res) => {
  try {
    const ticketTypes = await TicketType.findAll();
    res.status(200).json({ message: "All ticket types fetched!", data: ticketTypes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTicketTypeById = async (req, res) => {
  try {
    const ticketType = await TicketType.findByPk(req.params.id);
    if (!ticketType) {
      return res.status(404).json({ error: "Ticket type not found!" });
    }
    res.status(200).json({ message: "Ticket type fetched!", data: ticketType });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTicketType = async (req, res) => {
  try {
    const { color, name } = req.body;
    const ticketType = await TicketType.findByPk(req.params.id);

    if (!ticketType) {
      return res.status(404).json({ error: "Ticket type not found!" });
    }

    await ticketType.update({ color, name });
    res.status(200).json({ message: "Ticket type updated!", data: ticketType });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTicketType = async (req, res) => {
  try {
    const ticketType = await TicketType.findByPk(req.params.id);

    if (!ticketType) {
      return res.status(404).json({ error: "Ticket type not found!" });
    }

    await ticketType.destroy();
    res.status(200).json({ message: "Ticket type deleted!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
