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
  execute(interaction: ChatInputCommandInteraction<CacheType>) {
    const message = interaction.options.getString("message");

    return interaction.reply(message);
  }
  data = new SlashCommandBuilder()
    .setName("echo")
    .setDescription("Echoes the message you give.")
    .addStringOption((option) =>
      option
        .setName("message")
        .setDescription("A message for the bot to repeat.")
        .setRequired(true)
    );
}
