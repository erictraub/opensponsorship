var mongoose = require('mongoose');
var Promise = require('bluebird');
var chalk = require('chalk');
var connectToDb = require('./server/db');
var User = mongoose.model('User');
var Sport = mongoose.model('Sport');

var wipeCollections = function () {
    var removeUsers = Sport.remove({});
    return Promise.all([ removeUsers ]);
};

var seedSports = function () {

    var sports = [
        { name: 'Golf' },
        { name: 'Tennis' },
        { name: 'Cricket' },
        { name: 'Basketball' },
        { name: 'Baseball' },
        { name: 'American Football' },
        { name: 'Aquatics' },
        { name: 'Archery' },
        { name: 'Automobile Racing' },
        { name: 'Badminton' },
        { name: 'Beach Volleyball' },
        { name: 'Bobsleigh' },
        { name: 'Body Building' },
        { name: 'Boxing' },
        { name: 'Cross Country Running' },
        { name: 'Cross Country Skiing' },
        { name: 'Curling' },
        { name: 'Cycling' },
        { name: 'Darts' },
        { name: 'Decathlon' },
        { name: 'Down Hill Skiing' },
        { name: 'Equestrianism' },
        { name: 'eSports' },
        { name: 'Fencing' },
        { name: 'Field Hockey' },
        { name: 'Figure Skating' },
        { name: 'Gymnastics' },
        { name: 'Ice Hockey' },
        { name: 'Martial Arts' },
        { name: 'Mixed Martial Arts' },
        { name: 'Modern Pentathlon' },
        { name: 'Motorcycle Racing' },
        { name: 'Netball' },
        { name: 'Polo' },
        { name: 'Racquetball' },
        { name: 'Rowing' },
        { name: 'Rugby' },
        { name: 'Sailing' },
        { name: 'Softball' },
        { name: 'Shooting' },
        { name: 'Skateboarding' },
        { name: 'Skeet Shooting' },
        { name: 'Skeleton' },
        { name: 'Snow Boarding' },
        { name: 'Soccer (Football)' },
        { name: 'Squash' },
        { name: 'Surfing' },
        { name: 'Swimming' },
        { name: 'Track and Field' }
    ];

    return Sport.create(sports);

};

connectToDb
    .then(function () {
        return wipeCollections();
    })
    .then(function () {
        return seedSports();
    })
    .then(function () {
        console.log(chalk.green('Seed successful!'));
        process.kill(0);
    })
    .catch(function (err) {
        console.error(err);
        process.kill(1);
    });
