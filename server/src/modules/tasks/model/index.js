import mongoose, { Schema } from "mongoose";
import cron from "node-cron";
import moment from "moment";

const dataSchema = new Schema({
  task: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["incomplete", "complete"],
    default: "incomplete",
  },
  description: {
    type: String,
  },
  date: {
    type: String,
    // required: true,
  },
  time: {
    type: String,
    // required: true,
  },
  day: {
    type: String,
    // required: true,
  },
  month: {
    type: String,
    // required: true,
  },
  year: {
    type: String,
    // required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    // required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

async function deleteOldTasks() {
  try {
    // Calculate the date one week ago from today
    const oneWeekAgo = moment().subtract(1, "weeks").startOf("day").toDate();
    const result = await Task.deleteMany({ createdAt: { $lt: oneWeekAgo } });
    console.log(`${result.deletedCount} tasks deleted.`);
  } catch (err) {
    console.error(err);
  }
}

// Schedule the task to run every day at midnight
cron.schedule("0 0 * * *", () => {
  console.log("Running scheduled task to delete old tasks...");
  deleteOldTasks();
});

const Model = mongoose.model("Task", dataSchema);
export default Model;
