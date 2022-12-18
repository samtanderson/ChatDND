const { MongoClient, ServerApiVersion } = require('mongodb');

module.exports = {
    // MongoDB using 5e-bits for all the content
    connect: async function () {
        const uri = "mongodb+srv://"+process.env.dbuser+":"+process.env.dbpass+"@"+process.env.dbclusterurl+"/?retryWrites=true&w=majority";
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

        try {
            // Connect to the MongoDB cluster
            await client.connect();
            console.log("Connected successfully to server!");

            // Make the appropriate DB calls
            //await this.listDatabases(client);
            this.db = await client.db("prod");
            console.log("Connected successfully to database!");
            return this.db;

        } catch (e) {
            console.error(e);
        } finally {
            await client.close();
        }
    }
}