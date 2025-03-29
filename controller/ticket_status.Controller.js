const { TicketStatus } = require("../models");

exports.createTicket_status = async (req, res) => {
  try {
    const newStatus = await TicketStatus.create(req.body);
    res.status(201).json(newStatus);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTicket_status = async (req, res) => {
  try {
    const statuses = await TicketStatus.findAll();
    res.status(200).json(statuses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTicket_statusById = async (req, res) => {
  try {
    const status = await TicketStatus.findByPk(req.params.id);
    if (!status) {
      return res.status(404).json({ error: "Ticket_status not found" });
    }
    res.status(200).json(status);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTicket_status = async (req, res) => {
  try {
    const status = await TicketStatus.findByPk(req.params.id);
    if (!status) {
      return res.status(404).json({ error: "Ticket_status not found" });
    }
    await status.update(req.body);
    res.status(200).json(status);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTicket_status = async (req, res) => {
  try {
    const status = await TicketStatus.findByPk(req.params.id);
    if (!status) {
      return res.status(404).json({ error: "Ticket_status not found" });
    }
    await status.destroy();
    res.status(204).send(); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
