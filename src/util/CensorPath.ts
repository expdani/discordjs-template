/** Generic Censor */
export const GCens = "[...]";

/** Sanitize Path */
export const SanitizePath = (text: string) =>
  text
    .replace(process.cwd() ?? "[CWD]", "[CWD]")
    .replace(process.env.TEMP ?? "[TEMP]", "[TEMP]")
    .replace(process.env.TMP ?? "[TEMP]", "[TEMP]")
    .replace(process.env.USER ?? process.env.USERNAME ?? GCens, GCens)
    .replace(process.env.USERDOMAIN ?? GCens, GCens);
export default SanitizePath;
