import { InteractionType } from "discord.js";

module.exports = {
  once: false,
  execute: (client: any, interaction: any) => {
    if (interaction.type != InteractionType.ApplicationCommand) return;

    try {
      if (interaction.type === InteractionType.ApplicationCommand) {
        return client.commands
          .get(interaction.commandName)
          ?.execute(interaction);
      }
    } catch (err) {
      console.error(err);
    }
  },
};
