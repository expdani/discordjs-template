import { readdirSync } from "fs";
import { Collection, GatewayIntentBits } from "discord.js";
import { env } from "../environment";
import { DiscordClient } from "./classes/discord";

const client = new DiscordClient({
  intents: [GatewayIntentBits.Guilds],
});

client.commands = new Collection();

const eventFiles = readdirSync("./src/events").filter((file) =>
  file.endsWith(".ts")
);

for (const file of eventFiles) {
  const eventName = file.split(".")[0];
  const event = require(`./events/${file}`);

  if (event.once) {
    client.once(eventName, (...args) => event.execute(client, ...args));
  } else {
    client.on(eventName, (...args) => event.execute(client, ...args));
  }
}

process.on("SIGINT", () => {
  client.destroy();
  process.exit(0);
});

client.login(env.DISCORD_API_KEY);

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

module.exports = client;
