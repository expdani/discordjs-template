import {
  CacheType,
  ChatInputCommandInteraction,
  EmbedBuilder,
  SlashCommandBuilder,
} from "discord.js";

/** Base Command Interface */
export interface IBaseCommand {
  /** Command Information, as passed to Discord */
  data: Partial<SlashCommandBuilder>;
  /** Execute Function */
  execute(interaction: ChatInputCommandInteraction<CacheType>): any;
}

/** Base Command Class */
export abstract class BaseCommand implements IBaseCommand {
  data: Partial<SlashCommandBuilder>;
  execute(interaction: ChatInputCommandInteraction<CacheType>): any {
    interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setTitle("Error")
          .setDescription("This command has no function defined.")
          .setFields({
            name: "Possible Reasons",
            value: `This command is a work-in-progress.
            This command has been partially moved or removed.`,
          }),
      ],
      ephemeral: true,
    });
  }
}
