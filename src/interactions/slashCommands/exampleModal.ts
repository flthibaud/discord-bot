import { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } from "discord.js";
import { SlashCommand } from "../../types.js";

export const Slash: SlashCommand = {
    name: "testmodal",
    description: "Test Modal",
    run: async(interaction): Promise<void> => {
      const modal = new ModalBuilder()
        .setCustomId('ExampleModal')
        .setTitle('My Modal');

      const favoriteColorInput = new TextInputBuilder()
        .setCustomId('favoriteColorInput')
        .setLabel("What's your favorite color?")
        .setStyle(TextInputStyle.Short);

      const hobbiesInput = new TextInputBuilder()
        .setCustomId('hobbiesInput')
        .setLabel("What's some of your favorite hobbies?")
        .setStyle(TextInputStyle.Paragraph);

      const firstActionRow = new ActionRowBuilder<TextInputBuilder>().addComponents(favoriteColorInput);
      const secondActionRow = new ActionRowBuilder<TextInputBuilder>().addComponents(hobbiesInput);

      modal.addComponents(firstActionRow, secondActionRow);

      await interaction.showModal(modal);
    }
}; // Call an example modal on execution.