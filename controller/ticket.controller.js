const { Ticket, Event, Seat, Status, TicketType } = require("../models");

exports.createTicket = async (req, res) => {
  try {
    const ticket = await Ticket.create(req.body);
    res.status(201).json(ticket);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTicket = async (req, res) => {
  try {
    const tickets = await Ticket.findAll();
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findByPk(req.params.id, {
      include: [
        {
          model: Event,
          as: "event",
        },
        {
          model: Seat,
          as: "seat",
        },
        {
          model: Status,
          as: "status",
        },
        {
          model: TicketType,
          as: "ticketType",
        },
      ],
    });

    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found!" });
    }

    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.updateTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByPk(req.params.id);
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found!" });
    }

    await ticket.update(req.body);
    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByPk(req.params.id);
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found!" });
    }

    await ticket.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
