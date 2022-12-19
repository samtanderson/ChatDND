var request = require ('request');
const dbconnect = require('../database/connection');

var db = dbconnect.getDb();

module.exports = {
    Request: function () {
        request ({
            url: 'https://raw.githubusercontent.com/5e-bits/5e-database/main/src/5e-SRD-Ability-Scores.json',
            json: true
        }, (error, response, body) => {
            if(error || response.statusCode != 200){
                console.log(error)
            } else {
                if (body.length > 0) {
                    // Create index before insert
                    try {
                        db.collection('abilityScores').createIndex({"index":1},{ unique: true } );
                    } catch (e) { } // Index already exists

                    for (var node in body) {
                        db.collection('abilityScores').updateOne({ "index": body[node] }, body[node], { upsert: true })
                    } 
                }
            }
        })
    }
}