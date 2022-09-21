import ConfigException from "./ConfigException";
import Exception from "./Exception";

export default class EnvException extends ConfigException {
  constructor(message: string, reason?: Exception) {
    super(message, reason);
    this.name = "EnvironmentException";
  }
}
