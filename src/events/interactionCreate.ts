import { commands } from "..";

module.exports = {
  once: false,
  execute: (client: any, interaction: any) => {
    if (!interaction.isCommand() && !interaction.isContextMenu()) return;

    try {
      if (interaction.isCommand()) {
        return commands.get(interaction.commandName)?.execute(interaction);
      }

      // if (interaction.isModalSubmit()) {
      //   return client.modals.get(`modal-${interaction.customId}`)?.execute(interaction);
      // }

      // if (interaction.isContextMenu()) {
      //   return client.contextMenus.get(`context-${interaction.customId}`)?.execute(interaction);
      // }

      // if (interaction.isSelectMenu()) {
      //   return client.selectMenus.get(`select-${interaction.customId}`)?.execute(interaction);
      // }
    } catch (err) {
      console.error(err);
    }
  },
};
