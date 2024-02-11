import { ClientEvent } from "../types.js";
import { DiscordClient, Message } from "discord.js";

// Liste blanche des domaines autorisés
const whitelist = [
    "ext-twitch.tv",
    "jtvnw.net",
    "live-video.net",
    "ttvnw.net",
    "twitch.a2z.com",
    "twitchcdn.net",
    "twitchcdn-shadow.net",
    "twitch-shadow.net",
    "twitchsvc.net",
    "twitchsvc-staging.tech",
    "twitch.tv",
];

// Identifiants des rôles autorisés à poster des liens non listés
const allowedRoles = ["ROLE_ID_1", "ROLE_ID_2"];

export const Event: ClientEvent = {
    name: "messageCreate",
    run: async (message: Message, client: DiscordClient): Promise<void> => {
        if (message.author.bot) return;

        const urlPattern = /https?:\/\/[^\s]+/g;
        const links = message.content.match(urlPattern);

        if (links) {
            // Vérifier si l'utilisateur est administrateur ou possède un rôle autorisé
            const member = message.member;
            const isAdminOrAllowedRole = member && (member.permissions.has("Administrator") || member.roles.cache.some(role => allowedRoles.includes(role.id)));

            if (!isAdminOrAllowedRole) {
                const isWhitelisted = links.every(link => {
                    const url = new URL(link);
                    return whitelist.some(domain => url.hostname.includes(domain));
                });

                if (!isWhitelisted) {
                    try {
                        await message.delete();
                        await message.channel.send(`${message.author}, votre message a été supprimé car il contient un lien non autorisé.`);
                    } catch (error) {
                        console.error("Erreur lors de la suppression du message ou de l'envoi d'une notification à l'utilisateur.", error);
                    }
                    return;
                }
            }
        }
    }
};
