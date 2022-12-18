const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://"+process.env.dbuser+":"+process.env.dbpass+"@"+process.env.dbclusterurl+"/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

class Connection {
    
    static async open() {
        if (this.db) return this.db

        try {
        this.server = await client.connect(uri)
        console.log("Connected successfully to server!");
        this.db = await this.server.db("prod");
        console.log("Connected successfully to database!");
        return this.db
        } catch (e) {
            console.error(e);
        } finally {
            await client.close();
        }
    }
    
}

Connection.db = null
Connection.server = null

module.exports = { Connection }