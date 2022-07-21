import { Client, Collection } from "discord.js";

export class DiscordClient extends Client {
  commands: Collection<string, unknown>;
}
