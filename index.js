#!/usr/bin/env node

var readline = require('readline');
// https://nodejs.org/api/readline.html
var dJSON = require('dirty-json');
// https://github.com/RyanMarcus/dirty-json

var rl       = readline.createInterface({
    input   : process.stdin,
    output  : process.stdout,
    terminal: false
});

rl.on('line', function (line) {
    // console.log(line);
    dJSON.parse(line).then(function (r) {
        console.log(JSON.stringify(r));
    });
    rl.close();
})

