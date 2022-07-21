const { readdirSync } = require("fs");

/*
  This is an event that gets triggered on ready.
 */
module.exports = {
  once: true,
  execute: (client) => {
    const { commands, application } = client;

    const commandFiles = readdirSync("./src/commands").filter(
      (file: any) => file.endsWith(".ts") || file.endsWith(".js")
    );
    for (const file of commandFiles) {
      const commandInteraction = require(`../commands/${file}`);
      commands.set(commandInteraction.data.name, commandInteraction);
    }

    const commandData = commands.map((i) => i.data);
    return application.commands?.set(commandData);
  },
};
