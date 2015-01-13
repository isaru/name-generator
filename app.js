#!/usr/bin/env node

var females = require('./dist/female.json');
var males = require('./dist/male.json');
var surnames = require('./dist/surname.json');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var num = 10;

if (process.argv.length > 2) {
    num = process.argv[2];
}

for (var i = 0; i < num; i++) {
    var name;
    if (getRandomInt(0, 2) == 0) {
        name = females[getRandomInt(0, females.length)];
    } else {
        name = males[getRandomInt(0, males.length)];
    }
    
    var surname = surnames[getRandomInt(0, surnames.length)];
    var fullname = name + ' ' + surname;
    
    console.log(fullname);
}