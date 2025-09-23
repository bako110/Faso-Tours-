const eventService = require('../service/eventService');

// GET all events
exports.getEvents = async (req, res) => {
  try {
    const events = await eventService.getAllEvents();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET event by id
exports.getEvent = async (req, res) => {
  try {
    const event = await eventService.getEventById(req.params.id);
    if (!event) return res.status(404).json({ message: 'Événement non trouvé' });
    res.json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST create event
exports.createEvent = async (req, res) => {
  try {
    const newEvent = await eventService.createEvent(req.body);
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT update event
exports.updateEvent = async (req, res) => {
  try {
    const updatedEvent = await eventService.updateEvent(req.params.id, req.body);
    if (!updatedEvent) return res.status(404).json({ message: 'Événement non trouvé' });
    res.json(updatedEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE event
exports.deleteEvent = async (req, res) => {
  try {
    await eventService.deleteEvent(req.params.id);
    res.json({ message: 'Événement supprimé' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
