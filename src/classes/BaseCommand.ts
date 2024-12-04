import {
  ChatInputCommandInteraction,
  EmbedBuilder,
  InteractionReplyOptions,
  Colors,
} from "discord.js";
import {  CommandOptions } from "../types/Command";

/** Base Command Interface */
export interface IBaseCommand {
  /** Command Information, as passed to Discord */
  data: any;
  /** Execute Function */
  execute(interaction: ChatInputCommandInteraction): Promise<void>;
}

/** Base Command Class */
export abstract class BaseCommand implements IBaseCommand {
  abstract data: any;
  abstract execute(interaction: ChatInputCommandInteraction): Promise<void>;

  protected options: CommandOptions;

  constructor(options: CommandOptions) {
    this.options = {
      enabled: true,
      cooldown: 0,
      ...options
    };
  }

  /**
   * Reply to an interaction
   * @param interaction The interaction to reply to
   * @param content The content to reply with
   * @param ephemeral Whether the reply should be ephemeral
   */
  protected async reply(
    interaction: ChatInputCommandInteraction,
    content: string | EmbedBuilder | InteractionReplyOptions,
    ephemeral = false
  ): Promise<void> {
    if (typeof content === 'string') {
      await interaction.reply({ content, ephemeral });
    } else if (content instanceof EmbedBuilder) {
      await interaction.reply({ embeds: [content], ephemeral });
    } else {
      await interaction.reply({ ...content, ephemeral });
    }
  }

  /**
   * Send a success embed as a reply
   * @param interaction The interaction to reply to
   * @param title The title of the embed
   * @param description The description of the embed
   */
  protected async sendSuccessEmbed(
    interaction: ChatInputCommandInteraction,
    title: string, 
    description?: string
  ): Promise<void> {
    const embed = new EmbedBuilder()
      .setTitle(title)
      .setDescription(description || '')
      .setColor(Colors.Green)
      .setTimestamp();
    
    await this.reply(interaction, embed, true);
  }

  /**
   * Send an error embed as a reply
   * @param interaction The interaction to reply to
   * @param title The title of the embed
   * @param description The description of the embed
   */
  protected async sendErrorEmbed(
    interaction: ChatInputCommandInteraction,
    title: string, 
    description?: string
  ): Promise<void> {
    console.error(`[Error Embed] ${title}: ${description || 'No description provided'}`);
    const embed = new EmbedBuilder()
      .setTitle(title)
      .setDescription(description || '')
      .setColor(Colors.Red)
      .setTimestamp();
    
    await this.reply(interaction, embed, true);
  }

  /**
   * Send an info embed as a reply
   * @param interaction The interaction to reply to
   * @param title The title of the embed
   * @param description The description of the embed
   */
  protected async sendInfoEmbed(
    interaction: ChatInputCommandInteraction,
    title: string, 
    description?: string
  ): Promise<void> {
    const embed = new EmbedBuilder()
      .setTitle(title)
      .setDescription(description || '')
      .setColor(Colors.Blue)
      .setTimestamp();
    
    await this.reply(interaction, embed, true);
  }

  /**
   * Handle and log errors during command execution
   * @param interaction The interaction where the error occurred
   * @param error The error that was caught
   */
  protected async handleError(
    interaction: ChatInputCommandInteraction, 
    error: Error
  ): Promise<void> {
    console.error(`[Command Error] ${error.name}: ${error.message}`);
    if (error.stack) {
      console.error(error.stack);
    }
    
    await this.sendErrorEmbed(
      interaction,
      "Command Error", 
      "An unexpected error occurred while executing this command."
    );
  }
}