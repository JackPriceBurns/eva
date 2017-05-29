const Discord = require('discord.js');
const client = new Discord.Client();
Eva = require("./src/Eva.js");
Eva.Main = require("./src/Main.js");
Eva.Command = require("./src/Command.js");
require("./src/Commands.js");

client.on("ready", Eva.Main.ready);
client.on("message", Eva.Main.message);

client.login("MzE3Mzk5NjAyNDg5ODUxOTA0.DAjVlg.iG8hsve2awgeoqSUU9_wiNafV8I");