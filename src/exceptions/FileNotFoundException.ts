import SanitizePath from "../util/CensorPath";
import { StackToSingleLine } from "../util/StackToSingleLine";
import Exception from "./Exception";
import * as fs from "fs";

/**
 * @name FileNotFoundException
 * @description Triggered by a file not being found.
 * @exception @class
 */
export default class FileNotFoundException extends Exception {
  /**
   * Descrbies a EOENT (Entity not found exception)
   * @param file Path of the file
   * @param furtherInfomation Further information to provide the user
   * @param provideStackTrace Should we show a stack trace?
   */
  constructor(
    file: string,
    furtherInfomation?: string,
    provideStackTrace?: boolean
  ) {
    file = SanitizePath(file);
    furtherInfomation = furtherInfomation
      ? SanitizePath(furtherInfomation)
      : furtherInfomation;
    super(
      `The file ${file} was not found.${
        furtherInfomation
          ? `
Further Information:
${furtherInfomation}`
          : ""
      }`
    );
    this.name = "FileNotFoundException";
    if (!provideStackTrace) {
      StackToSingleLine(this);
      const stack = this.stack.split("\n");
      stack.pop();
      this.stack = stack.join("\n");
    }
  }
  /**
   * Checks for {@link path}, and if missing, throws a {@link FileNotFoundException}
   * @param path Path of the required file
   * @alias {@link DemandFile}
   */
  DemandFile(path: string): void {
    return DemandFile(path);
  }
}

/**
 * Checks for {@link path}, and if missing, throws a {@link FileNotFoundException}
 * @param path Path of the required file
 */
export const DemandFile = (path: string) => {
  if (!fs.existsSync(path)) throw new FileNotFoundException(path);
};
