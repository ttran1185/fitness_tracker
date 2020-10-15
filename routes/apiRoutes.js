const router = express.router();
const express = require("express");
const workout = require("../models/workout.js");

router.get("api/workout", (req, res) => {
    workout.create({}).then(data => { res.json(data)}).catch( err => res.json(err));
});

