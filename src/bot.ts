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
            GatewayIntentBits.Guilds, // Nécessaire pour les événements et actions basiques liés aux guildes (serveurs).
            GatewayIntentBits.GuildMessages, // Permet de recevoir des événements de messages dans les canaux de guildes.
            GatewayIntentBits.GuildPresences, // Utilisé pour recevoir des mises à jour sur les présences des membres de la guilde, telles que le statut en ligne.
            GatewayIntentBits.DirectMessages, // Permet de recevoir des événements de messages directs envoyés au bot.
            GatewayIntentBits.MessageContent, // Requis pour accéder au contenu des messages, soumis à des restrictions d'accès par Discord.
            GatewayIntentBits.DirectMessageReactions, // Permet de recevoir des événements lorsque des réactions sont ajoutées ou supprimées dans des messages directs.
            GatewayIntentBits.GuildMembers, // Nécessaire pour recevoir des événements liés aux membres de la guilde, comme les ajouts et les mises à jour.
            GatewayIntentBits.GuildMessageReactions, // Permet de recevoir des événements liés aux réactions sur les messages dans les canaux de guildes.
            GatewayIntentBits.GuildWebhooks, // Utilisé pour recevoir des événements liés aux webhooks dans les guildes.
            GatewayIntentBits.GuildVoiceStates, // Nécessaire pour les mises à jour des états dans les canaux vocaux, comme rejoindre ou quitter un canal.
            GatewayIntentBits.GuildInvites, // Permet de recevoir des événements liés aux invitations de guilde, comme leur création ou suppression.
        ],
        partials: [Partials.Channel] // Permet d'interagir avec des messages qui ne sont pas stockés dans le cache, comme les messages dans des canaux partiels.
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