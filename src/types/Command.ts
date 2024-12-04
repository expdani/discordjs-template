import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export interface CommandOptions {
  name: string;
  description: string;
  enabled?: boolean;
  cooldown?: number;
}

export interface Command {
  data: SlashCommandBuilder;
  execute: (interaction: ChatInputCommandInteraction) => Promise<void>;
}
