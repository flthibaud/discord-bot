import dotenv from 'dotenv';
import { cleanEnv, str } from 'envalid';

dotenv.config();

const env = cleanEnv(process.env, {
  PREFIX: str({ default: "!" }),
  BOT_TOKEN: str(),
  OWNER_IDS: str({ default: "" }),
});

// Convertir les chaînes PREFIX et OWNER_IDS en tableaux
const PREFIX: Array<string> = env.PREFIX.split(",");
const BOT_TOKEN: string = env.BOT_TOKEN;
const OWNER_IDS: Array<string> = env.OWNER_IDS ? env.OWNER_IDS.split(",") : [];

export { PREFIX, BOT_TOKEN, OWNER_IDS };
