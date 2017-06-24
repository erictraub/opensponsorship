'use strict';
var crypto = require('crypto');
var mongoose = require('mongoose');
var _ = require('lodash');

var schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    sports: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sport'
    }],
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    association: {
        type: String,
        required: true
    },
    team: {
        type: String
    },
    interests: {
        type: String,
        required: true
    },
    charities: {
        type: String
    },
    instagram: {
        type: String
    },
    twitter: {
        type: String
    },
    snapchat: {
        type: String
    },
    facebook: {
        type: String
    }
});

mongoose.model('Athlete', schema);
