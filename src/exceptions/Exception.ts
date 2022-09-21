export default class Exception extends Error {
  constructor(message: string, cause?: Exception) {
    super(message, cause);
    this.name = "ApplicationException";
  }
}
