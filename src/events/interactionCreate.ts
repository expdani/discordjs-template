import {
  CacheType,
  ChatInputCommandInteraction,
  InteractionType,
} from "discord.js";
import { DiscordClient } from "../classes/discord";

export const once = false;

export const execute = (
  client: DiscordClient,
  interaction: ChatInputCommandInteraction<CacheType>
) => {
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
};
