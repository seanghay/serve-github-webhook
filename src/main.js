import "dotenv/config";
import morgan from "morgan";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { environments } from "./config.js";
import { Webhooks, createNodeMiddleware } from "@octokit/webhooks";
import fs from "fs/promises";
import fg from "fast-glob";
import Handlebars from "handlebars";
import EventSource from "eventsource";
import { emitter } from './emitter.js'

Handlebars.registerHelper("json", (context) =>
  JSON.stringify(context, null, 2)
);

const env = environments();
const app = express();

const webhooks = new Webhooks({ secret: env.githubSecret });
const events = await parseEvents();

for (const event of events) {
  webhooks.on(event.name, async (args) => {
    const message = event.render(args.payload);
    await emitter.emit('message', { message, payload: args.payload });
  });
}


app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(env.logFormat));
app.use(createNodeMiddleware(webhooks));

app.use((_, res) => res.status(404).json({ msg: "not found" }));

app.listen(env.port, () =>
  console.log(`[express] listening on [http://127.0.0.1:${env.port}]`)
);

async function parseEvents() {
  const files = await fg("src/events/**/*.md");
  return Promise.all(
    files.map(async (file) => {
      const content = await fs.readFile(file, "utf-8");
      const name = file
        .replace("src/events/", "")
        .replace("/", ".")
        .replace(".md", "");

      return {
        name,
        file,
        render: Handlebars.compile(content),
      };
    })
  );
}

// debug
if (env.debugEventSource) {
  console.log('[debug] event source enabled')
  const source = new EventSource(env.debugEventSource);
  source.onmessage = (event) => {
    const webhookEvent = JSON.parse(event.data);

    webhooks
      .verifyAndReceive({
        id: webhookEvent["x-request-id"],
        name: webhookEvent["x-github-event"],
        signature: webhookEvent["x-hub-signature"],
        payload: webhookEvent.body,
      })
      .catch(console.error);
  };
}
