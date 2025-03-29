const { EventType } = require("../models");

exports.createEvent_type = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }
    const newEventType = await EventType.create({ name });
    res.status(201).json(newEventType);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getEvent_type = async (req, res) => {
  try {
    const eventTypes = await EventType.findAll();
    res.status(200).json(eventTypes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getEvent_typeById = async (req, res) => {
  try {
    const eventType = await EventType.findByPk(req.params.id);
    if (!eventType) {
      return res.status(404).json({ message: "EventType not found" });
    }
    res.status(200).json(eventType);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateEvent_type = async (req, res) => {
  try {
    const eventType = await EventType.findByPk(req.params.id);
    if (!eventType) {
      return res.status(404).json({ message: "EventType not found" });
    }
    await eventType.update(req.body);
    res.status(200).json({ message: "EventType updated successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteEvent_type = async (req, res) => {
  try {
    const eventType = await EventType.findByPk(req.params.id);
    if (!eventType) {
      return res.status(404).json({ message: "EventType not found" });
    }
    await eventType.destroy();
    res.status(200).json({ message: "EventType deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
