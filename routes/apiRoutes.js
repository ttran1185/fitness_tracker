const router = require("express").Router();
const express = require("express");
const workout = require("../models/workout.js");


module.exports =function (router) {
router.post("api/workout", (req, res) => {
    workout.create({}).then(data => { res.json(data)}).catch( err => res.json(err));
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true, runValidators: true }
    )
      .then(data => res.json(data))
      .catch(err => {
        res.json(err);
      });

router.get("api/workout", (req, res) => {
    workout.find({}).then(data => { res.json(data)}).catch( err => res.json(err));
});

router.get("api/workout/range", (req, res) => {
    workout.find({}).then(data => { res.json(data)}).catch( err => res.json(err));
});


};
