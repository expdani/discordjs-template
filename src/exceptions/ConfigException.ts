import Exception from "./Exception";

export default class ConfigException extends Exception {
  constructor(message: string, reason?: Exception) {
    super(message, reason);
    this.name = "ConfigException";
  }
}
