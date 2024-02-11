import { Client, DiscordClient, GatewayIntentBits, Partials } from "discord.js";
import { BOT_TOKEN } from "./config.js";
import { dirname } from "path";
import { ButtonCommand, ClientEvent, ContextMenu, MessageCommand, ModalForm, SelectMenu, SlashCommand } from "./types.js";
import { ButtonManager } from "./structures/managers/buttonCommands.js";
import { EventManager } from "./structures/managers/events.js";
import { MessageCMDManager } from "./structures/managers/messageCommands.js";
import { ModalManager } from "./structures/managers/modalForms.js";
import { SelectMenuManager } from "./structures/managers/selectMenus.js";
import { SlashManager } from "./structures/managers/slashCommands.js";

const __dirname: string = dirname(import.meta.url);
export const rootPath = __dirname;

(async(): Promise<void> => {
    const client: DiscordClient = new Client({
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.MessageContent,
        ],
        partials: [Partials.Channel]
    });

    client.messageCommands = new Map<string, MessageCommand>();
    client.messageCommands_Aliases = new Map<string, string>();
    client.events = new Map<string, ClientEvent>();
    client.buttonCommands = new Map<string, ButtonCommand>();
    client.selectMenus = new Map<string, SelectMenu>();
    client.modalForms = new Map<string, ModalForm>();
    client.contextMenus = new Map<string, ContextMenu>();
    client.slashCommands = new Map<string, SlashCommand>();
    
    await MessageCMDManager(client, __dirname);
    await EventManager(client, __dirname);
    await ButtonManager(client, __dirname);
    await SelectMenuManager(client, __dirname);
    await ModalManager(client, __dirname);
    await client.login(BOT_TOKEN);
    await SlashManager(client, __dirname); // Includes context menu handling as they belong to same command type.
})();