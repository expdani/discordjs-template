import { Client, Collection } from "discord.js";
import { BaseCommand } from "./BaseCommand";

export class DiscordClient extends Client {
  commands: Collection<string, BaseCommand>;
}
