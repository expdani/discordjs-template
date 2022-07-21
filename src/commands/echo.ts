/*
  This is an example interaction command that echoes your message.
 */
module.exports = {
  data: {
    name: "echo",
    description: "Echoes the message you give.",
    options: [
      {
        name: "message",
        description: "A message for the bot to repeat.",
        type: 3,
        required: true,
      },
    ],
  },
  execute: (interaction) => {
    const message = interaction.options.getString("message");

    return interaction.reply(message);
  },
};
