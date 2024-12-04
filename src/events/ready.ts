import { readdirSync } from "fs";
import { BaseCommand } from "../classes/BaseCommand";
import { DiscordClient } from "../classes/discord";
import { ApplicationCommandDataResolvable } from "discord.js";

/**
 * Should only fire once when the bot starts up
 */
export const once = true;

/**
 * Handles the ready event by loading and registering all commands
 * @param client The Discord client instance
 */
export const execute = async (client: DiscordClient) => {
  try {
    const { commands, application } = client;
    console.log(`Logged in as ${client.user?.tag}!`);
    console.log('Loading commands...');

    const commandFiles = readdirSync("./src/commands").filter(
      (file: string) => file.endsWith(".ts") || file.endsWith(".js")
    );

    for (const file of commandFiles) {
      try {
        const commandInteraction: BaseCommand = new (require(`../commands/${file}`).Command)();
        commands.set(commandInteraction.data.name, commandInteraction);
        console.log(`✓ Loaded command: ${commandInteraction.data.name}`);
      } catch (error) {
        console.error(`✗ Failed to load command from file ${file}:`, error);
      }
    }

    const commandData = commands.map((command) => command.data) as ApplicationCommandDataResolvable[];
    
    if (!application?.commands) {
      throw new Error('Application commands are not available');
    }

    console.log(`Registering ${commandData.length} commands with Discord...`);
    await application.commands.set(commandData);
    console.log('✓ Successfully registered all commands!');
  } catch (error) {
    console.error('Failed to initialize bot:', error);
  }
};
