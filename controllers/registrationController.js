import Event from "../models/Event.js";
import Registration from "../models/Registration.js";

export const registerEvent = async (req, res) => {
  const event = await Event.findById(req.params.eventId);
  if (!event) return res.status(404).json({ message: "Event not found" });

  if (event.registeredCount >= event.capacity)
    return res.status(400).json({ message: "Event full" });

  await Registration.create({
    user: req.user.id,
    event: event._id
  });

  event.registeredCount++;
  await event.save();

  res.json({ message: "Registered successfully" });
};
