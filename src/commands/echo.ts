import {
  CacheType,
  ChatInputCommandInteraction,
  SlashCommandBuilder,
} from "discord.js";
import { BaseCommand, IBaseCommand } from "../classes/BaseCommand";

/*
  This is an example interaction command that echoes your message.
 */
export class Command extends BaseCommand implements IBaseCommand {
  data = new SlashCommandBuilder()
    .setName("echo")
    .setDescription("Echoes the message you give.")
    .addStringOption((option) =>
      option
        .setName("message")
        .setDescription("The message to echo back")
        .setRequired(true)
        .setMinLength(1)
        .setMaxLength(2000)
    );

  async execute(interaction: ChatInputCommandInteraction<CacheType>): Promise<void> {
    const message = interaction.options.getString("message", true);
    await interaction.reply({ content: message });
  }
}
