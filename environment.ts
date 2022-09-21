import dotenv from "dotenv";
import path from "path";
import * as fs from "fs";
import EnvException from "./src/exceptions/EnvException";
import FileNotFoundException from "./src/exceptions/FileNotFoundException";
import { StackToSingleLine } from "./src/util/StackToSingleLine";

const envFile = `${path.resolve(__dirname)}/.env`;

if (!fs.existsSync(envFile)) {
  const fileNotFoundEx = new FileNotFoundException(envFile);
  fs.writeFileSync(
    envFile,
    `# Your Discord Bot Token:
DISCORD_API_KEY=

# (Optional) List of owner/admin user-ids, seperated by commas
ADMINS=656861522718621717,656861522718621717
    `
  );
  const envException = new EnvException(
    `No .env file found. Created a template .env file.
    Input your API key and other information there.`,
    fileNotFoundEx
  );
  StackToSingleLine(envException);
  throw envException;
}

const file = dotenv.config({ path: envFile });

/**
 * Export constants from the dotenv file
 */
export const env = (file && file.parsed) || {};
