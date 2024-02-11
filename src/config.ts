import dotenv from 'dotenv';

dotenv.config();

export const PREFIX: Array<string> = process.env.PREFIX?.split(",") ?? ["!"];
export const BOT_TOKEN: string = process.env.BOT_TOKEN ?? "";
export const OWNER_IDS: Array<string> = process.env.OWNER_IDS?.split(",") ?? [];