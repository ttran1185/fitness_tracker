const mongoose = require("mongoose");
const Schema =mongoose.Schema;

const workoutSchema = new Schema({
        day: {
        type: Date,
        default: Date.now
      },
      exercises: [
        {
          type: {
            type: String,
            trim: true,
            required: "Enter an exercise type"
          },
          name: {
            type: String,
            trim: true,
            required: "Enter an exercise name"
          },
          duration: {
            type: Number,
            required: "Enter an exercise duration in minutes"
          },
          weight: {
            type: Number,
            default: 0
          },
          reps: {
            type: Number,
            default: 0
          },
          sets: {
            type: Number,
            default: 0
          },
          distance: {
            type: Number
          }
        }
      ]
    },
{
    toJSON: {
        virtuals: true
    
    }
}
);
workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercises) => {
        return total + exercises.duration;
    }, 0);
});
const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;