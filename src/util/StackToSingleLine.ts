import Exception from "../exceptions/Exception";

export const StackToSingleLine = (excetion: Exception) => {
  let state = 2;
  excetion.stack = (excetion.stack ?? "")
    .split("\r\n")
    .join("\n")
    .split("\n")
    .filter((v) => {
      if (v.startsWith("Created")) {
        state = 1;
        return true;
      }
      if (state === 1) {
        state = 0;
        return true;
      }
      return state;
    })
    .join("\n");
  return excetion;
};
