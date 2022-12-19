var request = require('sync-request');
const dbconnect = require('../database/connection');

var db = dbconnect.getDb();

module.exports = {
    Request: function () {
        var res = request('POST', 'https://raw.githubusercontent.com/5e-bits/5e-database/main/src/5e-SRD-Ability-Scores.json', { json: true, });
        var data = JSON.parse(res.getBody('utf8'));

        for (var node in data) {
            db.collection('abilityScores').insert(data[node], { upsert: true });
        }
    }
}