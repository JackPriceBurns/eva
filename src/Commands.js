const Eva = require("./Eva.js");
const Discord = require("discord.js");

Eva.Command.registerCommand("help", (message, args) => {

    if(args.length !== 0){
        return false;
    }

    message.reply(["help", "/profile - view your profile", "/ping - PONG!"]);
    return true;

});

Eva.Command.registerCommand("ping", (message, args) => {

    if(args.length !== 0){
        return false;
    }

    message.reply("PONG!");
    return true;

});

Eva.Command.registerCommand("profile", (message) => {

    message.reply("here is your profile");

});

Eva.Command.registerCommand("panic", (message) => {
    message.channel.startTyping();
    let gifs = ["https://media.giphy.com/media/KL3rUL1cXbmgM/giphy.gif", "http://1.bp.blogspot.com/-vnYRy8fuww0/UxFdmssGKzI/AAAAAAAABkU/CHghAgpKkkw/s1600/EevZbVX.gif", ];
    message.channel.send(message.author + ", aaahhhh!", {
        file: gifs[Math.floor(Math.random()*gifs.length)]
    });
    message.channel.stopTyping();
    return true;
});