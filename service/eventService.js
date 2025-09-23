const Event = require('../model/event');

exports.getAllEvents = async () => {
  return await Event.find().sort({ date: -1 });
};

exports.getEventById = async (id) => {
  return await Event.findById(id);
};

exports.createEvent = async (data) => {
  const event = new Event(data);
  return await event.save();
};

exports.updateEvent = async (id, data) => {
  return await Event.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteEvent = async (id) => {
  return await Event.findByIdAndDelete(id);
};
