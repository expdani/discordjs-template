import {
  SlashCommandBuilder,
} from "discord.js";

/*
  This is an example interaction command that echoes your message.
 */
module.exports = {
  data: new SlashCommandBuilder()
    .setName("echo")
    .setDescription("Echoes the message you give.")
    .addStringOption((option) =>
      option
        .setName("message")
        .setDescription("A message for the bot to repeat.")
        .setRequired(true)
    ),
  execute: (interaction) => {
    const message = interaction.options.getString("message");

    return interaction.reply(message);
  },
};
