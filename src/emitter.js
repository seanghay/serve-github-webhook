import TelegramBot from "node-telegram-bot-api";
import { environments } from "./config.js";
import Emittery from "emittery";
import telegramifyMarkdown from "telegramify-markdown";
const env = environments();

export const emitter = new Emittery();

const telegramBot = new TelegramBot(env.telegram.botToken, { polling: false });

emitter.on("message", async ({ message, payload }) => {
  await telegramBot.sendMessage(
    env.telegram.chatId,
    telegramifyMarkdown(message),
    {
      parse_mode: "MarkdownV2",
    }
  );
});
