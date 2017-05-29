const Discord = require('discord.js');
const Eva = require("./Eva.js");

module.exports = {

    commands: {},

    registerCommand: (command, func) => {
        if(Eva.Command.commands[command] !== undefined){ throw new Error.CommandAlreadyRegistered(command); }
        Eva.Command.commands[command] = func;
    },

    execute: (message, command, args, sender) => {

        if(Eva.Command.commands[command] === undefined) { message.reply("sorry I don't recognise that command type /help"); return; }

        try {
            if(!Eva.Command.commands[command](message, args, sender)){
                message.reply("sorry I don't recognise that command type /help"); return;
            }
        } catch (error) {
            throw error;
        }

    }

};