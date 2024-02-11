import { MessageCommand } from "../../types.js";
import { DiscordClient } from "discord.js";
import { fileReader } from "../../utils/fileReader.js";

export const MessageCMDManager = async(client: DiscordClient, rootPath: string): Promise<void> => {
    const messageCommandsFiles: Array<string> = fileReader(`${rootPath}/messageCommands`);
    if (!messageCommandsFiles.length) return;

    for (const messageCommandFile of messageCommandsFiles) {
        const messageCommand: MessageCommand = (await import(`file:///${messageCommandFile}`))?.MsgCommand;
        if (!messageCommand) continue;

        if (!messageCommand.ignore && messageCommand.name) client.messageCommands?.set(messageCommand.name.toLowerCase(), messageCommand);
        if (!messageCommand.ignore && messageCommand.aliases && Array.isArray(messageCommand.aliases)) messageCommand.aliases.forEach((messageCommandAlias: string) => {
            client.messageCommands_Aliases?.set(messageCommandAlias, messageCommand.name);
        });
    };
};