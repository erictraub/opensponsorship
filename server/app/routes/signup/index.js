'use strict';
var router = require('express').Router();
var busboy = require('connect-busboy');
var AWS = require('aws-sdk');
var fs = require('fs');
var path = require('path');
var mongoose = require('mongoose');
var Athlete = mongoose.model('Athlete');
var Sport = mongoose.model('Sport');
module.exports = router;

router.use(busboy());

// refactor into promises if have time
router.post('/profile-image', function(req, res, next) {
    var fstream;
    req.pipe(req.busboy);
    req.busboy.on('file', function (fieldname, file, filename) {
        filename = filename + Date.now();
        // store image temporarily
        fstream = fs.createWriteStream(path.join(__dirname, '../../../temp-assets/' + filename));
        file.pipe(fstream);
        fstream.on('close', function () {
             //aws credentials
             var key = require(path.join(__dirname, '../../../env')).AMAZON_S3_KEY;
             var secret = require(path.join(__dirname, '../../../env')).AMAZON_S3_SECRET;
             AWS.config = new AWS.Config();
             AWS.config.accessKeyId = require(path.join(__dirname, '../../../env')).AMAZON_S3_KEY;
             AWS.config.secretAccessKey = require(path.join(__dirname, '../../../env')).AMAZON_S3_SECRET;
             // AWS.config.region = "us-west-2";
             AWS.config.apiVersions = { "s3": "2006-03-01" };
             var s3 = new AWS.S3();
             var bodystream = fs.createReadStream(path.join(__dirname, '../../../temp-assets/' + filename));

             var params = {
                'Bucket': 'et-opensponsorship',
                'Key': 'uploads/athlete-photos/' + filename,
                'Body': bodystream,
                'ContentEncoding': 'base64', 
                'ContentType ': 'image/jpeg',
                'ACL':'public-read-write'
             };

             // upload to amazon s3
             s3.upload(params, function(err, data) {
                var imageUrl = data.Location;
                // delete temp image
                fs.unlink(path.join(__dirname, '../../../temp-assets/' + filename), (err) => {
                    if (err) return console.error(err);
                    res.json({ 'imageUrl': imageUrl });
                });
             });
        });
    });
});

router.post('/athlete', function(req, res, next) {
    Athlete.create(req.body)
    .then(newAthlete => {
        console.log('ATH: ', newAthlete);
        res.json(newAthlete);
    })
    .catch(err => next(err));
});

router.get('/sport', (req, res, next) => {
    Sport.find({})
    .then(sports => { 
        res.json(sports);
    })
    .catch(err => next(err));
});




