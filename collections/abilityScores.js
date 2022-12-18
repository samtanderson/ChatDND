var request = require ('request');
const database = require('./database/connection');

database.connect();

module.exports = {
    Request: function () {
        request ({
            url: 'https://raw.githubusercontent.com/5e-bits/5e-database/main/src/5e-SRD-Ability-Scores.json',
            json: true
        }, (error, response, body) => {
            !error && response.statusCode === 200
                ? console.log (body)
                : console.log (error)
        })

        const collection = database.db.collection('abilityScores');
        collection.find().toArray().then(result => console.log(result));
    }
}