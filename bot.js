var Discord = require("discord.js");
var client = new Discord.Client();
var wordNet = require("wordnet");
var mysql = require("mysql");
var connection = mysql.createConnection({host: "localhost", user: "root", password: "", database: "eva"});

connection.connect(function (error) {
    if (error) {
        console.error("error connecting: " + error.stack);
        process.exit();
    }
});

client.on("ready", function () {

    console.log("I am ready!");

});

var sounds = ["shi", "co", "ri", "ra", "ro", "zo", "chi", "ha", "so", "ta", "yo", "ga", "vi"];

client.on("message", function (message) {

    if (message.channel === message.author.dmChannel) {

        executeCommand(message, message.content.split(" "));

    } else if (message.content.split(" ")[0] === "Eva,") {

        executeCommand(message, message.content.split(" ").splice(1));

    }

});

function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

function executeCommand(message, args) {

    if (args[0] === "spell" && args.length === 1) {

        var numOfSounds = Math.floor(Math.random() * sounds.length) + 1;
        var spell = "";

        for (let x = 0; x < numOfSounds; x++) {

            shuffle(sounds);
            spell += sounds[0];

        }

        message.reply(spell);

    } else if (args[0] === "what" && args[1] === "does" && args[3] === "mean?" && args.length === 4) {

        wordNet.lookup(args[2], function (error, definition) {

            if (error) {
                console.log("An error occurred: " + error);
                message.reply("Sorry I couldn't find a definition for that word.");
                return;
            }

            message.reply(definition[0].glossary + ".");

        });

    } else if (args[0] === "message" && args[1] === "me" && args.length === 2) {

        message.author.dmChannel.send("what would you like?").catch(console.error);

    } else if (args[0] === "hello" && args.length === 1) {

        message.reply("hey there!");

    } else if (args[0] === "profile" && args.length === 1) {

        message.channel.send(
            [
                "**" + message.author + "'s Profile** / lvl " + 12,
                "Strength: " + 4,
                "Vitality: " + 2,
                "Agility: " + 8,
                "Intelligence: " + 22
            ]
        );

    } else {

        message.reply("sorry I am not very good at talking at the moment.");

    }
}

client.login("MzE3Mzk5NjAyNDg5ODUxOTA0.DAjVlg.iG8hsve2awgeoqSUU9_wiNafV8I");