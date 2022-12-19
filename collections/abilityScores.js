var request = require ('request');
const dbconnect = require('../database/connection');

var db = dbconnect.getDb();
var response;

module.exports = {
    Request: function () {
        request ({
            url: 'https://raw.githubusercontent.com/5e-bits/5e-database/main/src/5e-SRD-Ability-Scores.json',
            json: true
        }, (error, response, body) => {
            !error && response.statusCode === 200
                ? (response = body)
                : console.log(error)
        })

        db.collection('abilityScores').update({ }, [ response ], { multi: true });
    }
}