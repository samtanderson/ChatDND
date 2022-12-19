var request = require ('request');
const dbconnect = require('../database/connection');

var db = dbconnect.getDb();

module.exports = {
    Request: function () {
        console.log('Starting Skills Update')
        request ({
            url: 'https://raw.githubusercontent.com/5e-bits/5e-database/main/src/5e-SRD-Skills.json',
            json: true
        }, (error, response, body) => {
            if(error || response.statusCode != 200){
                console.log(error)
            } else {
                if (body.length > 0) {

                    for (var node in body) {
                        for(var attributename in body[node]){
                            db.collection('skills').updateOne({ "index": body[node]['index'] }, { $set:{ [attributename] : body[node][attributename]  } }, { upsert: true })
                        }
                    } 
                }
            }
        })
        console.log('Finshed Skills Update')
    }
}