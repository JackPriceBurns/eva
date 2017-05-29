const Eva = require("./Eva.js");

module.exports = {

    ready: () => {
        console.log("Eva> Hello World!");
    },

    message: (message) => {
        //this.checkUser(message.author);

        if (message.channel === message.author.dmChannel) {

            //executeCommand(message, message.content.split(" "));

        } else if (message.content.split(" ")[0][0] === "/") {

            let command = message.content.split(" ")[0].split("").splice(1).join("");
            let args = message.content.split(" ").splice(1);

            try {
                Eva.Command.execute(message, command, args, message.author);
            } catch (error) {
                throw error;
            }

        }

    }

};