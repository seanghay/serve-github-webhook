const passthrough = (v) => v;

/**
 *
 * @param {string} key
 * @param {any} defaultValue
 * @returns {string}
 */
export function envOrDefault(key, defaultValue, transformer = passthrough) {
  const value = process.env[key];
  if (value == null) return defaultValue;
  return transformer(value);
}

export function environments() {
  return {
    logFormat: envOrDefault("MORGAN_LOG_FORMAT", "dev"),
    port: envOrDefault("PORT", 8080, parseInt),
    githubSecret: envOrDefault("GH_WEBHOOK_SECRET"),
    debugEventSource: envOrDefault("DEBUG_EVENT_SOURCE_URL"),
    telegram: {
      botToken: envOrDefault("TG_BOT_TOKEN", null),
      chatId: envOrDefault("TG_CHAT_ID", null, parseInt),
    },
  };
}
