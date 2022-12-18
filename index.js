//Importing all needed Commands
const Discord = require("discord.js"); //this is the official discord.js wrapper for the Discord Api, which we use!
const express = require("express");
const app = express();

//Creates frontend for keepalive monitoring
app.listen(3000, () => {
  console.log("Bot is alive!")
})

app.get("/", (req, res) => {
  res.send("Bot is alive!");
})

const colors = require("colors"); //this Package is used, to change the colors of our Console! (optional and doesnt effect performance)
const fs = require("fs"); //this package is for reading files and getting their inputs

//Creating the Discord.js Client for This Bot with some default settings ;) and with partials, so you can fetch OLD messages
const client = new Discord.Client({
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  disableEveryone: true,
  partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});

//Client variables to use everywhere
client.commands = new Discord.Collection(); //an collection (like a digital map(database)) for all your commands
client.aliases = new Discord.Collection(); //an collection for all your command-aliases
client.categories = fs.readdirSync("./commands/"); //categories
client.cooldowns = new Discord.Collection(); //an collection for cooldown commands of each user

//Loading files, with the client variable like Command Handler, Event Handler, ...
["command", "events"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

// Display a message when the bot comes online
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//login into the bot
try{
  client.login(process.env.token);
}catch (e) {
  console.log(String(e.stack).red);
}

// Used to debug sharding
// If receiving error "preparing hit on gateway discord 429 hit on route", use "kill 1" in terminal
client.on('debug', console.log);

// MongoDB using 5e-bits for all the content
var MongoClient = require('mongodb').MongoClient;
var mongoclient = new MongoClient(new Server("localhost", 27017), {native_parser: true});

// Open the connection to the server
mongoclient.open(function(err, mongoclient) {
  if (err) throw err;
  var db = mongoclient.db("prod");
  console.log("Connected to database!");
  db.close();
});