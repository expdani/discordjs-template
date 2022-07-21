import {
  ApplicationCommandOptionType,
  ApplicationCommandType,
} from "discord.js";

/*
  This is an example interaction command that echoes your message.
 */
module.exports = {
  data: {
    name: "echo",
    description: "Echoes the message you give.",
    type: ApplicationCommandType.ChatInput,
    options: [
      {
        name: "message",
        description: "A message for the bot to repeat.",
        type: ApplicationCommandOptionType.String,
        required: true,
      },
    ],
  },
  execute: (interaction) => {
    const message = interaction.options.getString("message");

    return interaction.reply(message);
  },
};
