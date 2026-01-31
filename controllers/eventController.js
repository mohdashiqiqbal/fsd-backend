import Event from "../models/Event.js";

export const createEvent = async (req, res) => {
  const event = await Event.create({
    ...req.body,
    createdBy: req.user.id
  });
  res.json(event);
};

export const getEvents = async (req, res) => {
  const events = await Event.find();
  res.json(events);
};
