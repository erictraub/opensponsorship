'use strict';
var router = require('express').Router();
var mongoose = require('mongoose');
var Athlete = mongoose.model('Athlete');
module.exports = router;

router.post('/', function(req, res, next) {
    req.checkBody("firstName", "'First name' is required.").notEmpty();
    req.checkBody("lastName", "'Last name' is required.").notEmpty();
    req.checkBody("gender", "'Gender' is required.").notEmpty();
    req.checkBody("dateOfBirth", "'Date of Birth' is required.").notEmpty();
    var errors = req.validationErrors();
    if (errors) return res.json(errors);
    Athlete.create(req.body)
    .then(newAthlete => {
        res.json(newAthlete);
    })
    .catch(err => next(err));
});

router.get('/', (req, res, next) => {
    Athlete.find({})
    .then(athletes => { 
        res.json(athletes);
    })
    .catch(err => next(err));
});




