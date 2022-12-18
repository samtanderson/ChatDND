const { MongoClient, ServerApiVersion } = require('mongodb');

module.exports = {
    // MongoDB using 5e-bits for all the content
    dbmanin: async function () {
        const uri = "mongodb+srv://"+process.env.dbuser+":"+process.env.dbpass+"@"+process.env.dbclusterurl+"/?retryWrites=true&w=majority";
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

        try {
            // Connect to the MongoDB cluster
            await client.connect();
            console.log("Connected to database!");

            // Make the appropriate DB calls
            await  listDatabases(client);

        } catch (e) {
            console.error(e);
        } finally {
            await client.close();
        }
    },
    listDatabases: async function(client){
        databasesList = await client.db().admin().listDatabases();

        console.log("Databases:");
        databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    }
}