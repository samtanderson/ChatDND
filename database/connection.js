const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://"+process.env.dbuser+":"+process.env.dbpass+"@"+process.env.dbclusterurl+"/?retryWrites=true&w=majority";

var _db;

module.exports = {
    // MongoDB using 5e-bits for all the content
    connectToServer: async function (callback) {
        MongoClient.connect( uri,  { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 }, function( err, client ) {
            console.log("Connected successfully to server!");
            _db  = client.db('prod');
            console.log("Connected successfully to database!");
            return callback( err );
        });
    },
    getDb: function() {
        return _db;
    }
};