const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Exercise type:",
  },
  name: {
    type: String,
    required: "Exercise name:",
  },
  distance: {
    type: Number,
    required: "Distance:",
  },
  duration: {
    type: Number,
    required: "Duration:",
  },
  weight: {
    type: Number,
    required: "Weight:",
  },
  sets: {
    type: Number,
    required: "Sets:",
  },
  reps: {
    type: Number,
    required: "Reps:",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
