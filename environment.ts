import dotenv from "dotenv";
import path from "path";
const file = dotenv.config({path: path.resolve(__dirname) + "/.env"});

/**
 * Export constants from the dotenv file
 */
export const env = (file && file.parsed) || {};
