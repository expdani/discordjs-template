import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export type CommandOptions = {
  name: string;
  description: string;
  enabled?: boolean;
  cooldown?: number;
};

export type Command = {
  data: SlashCommandBuilder;
  execute: (interaction: ChatInputCommandInteraction) => Promise<void>;
};
