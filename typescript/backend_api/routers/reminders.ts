import { Router } from "express";
import { CreateReminderDto } from "../dtos/reminder";
import Reminder from "../models/reminder";

const router = Router();

const reminderList: Reminder[] = [];

router.get("/", (req, res) => {
  res.send(reminderList);
});

router.post("/", (req, res) => {
  const { title, description } = req.body as CreateReminderDto;

  const reminder = new Reminder(title, description);

  reminderList.push(reminder);

  res.status(201).json(reminder);
});

export default router;
