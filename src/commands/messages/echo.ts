import { CacheType, ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

/*
  This is an example interaction command that echoes your message.
 */

export const data = new SlashCommandBuilder()
  .setName("echo")
  .setDescription("Echoes the message you give.")
  .addStringOption(option =>
    option
      .setName("message")
      .setDescription("The message to echo back")
      .setRequired(true)
      .setMinLength(1)
      .setMaxLength(2000),
  );

export const execute = async (
  interaction: ChatInputCommandInteraction<CacheType>,
): Promise<void> => {
  const message = interaction.options.getString("message", true);
  await interaction.reply({ content: message });
};
