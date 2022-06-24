# Serve GitHub Webhooks

An HTTP server for handling GitHub Webhooks event to Telegram Chat/Group/Channel.


## Features

- Using Markdown & Handlebars template engine for building messages.
- File-based GitHub events (`src/events/issues/closed.md` will be `issues.closed`)


### Deployment

Environment variables

```env
NTBA_FIX_319=1
NODE_ENV=development
PORT=8080
GH_WEBHOOK_SECRET=my_secret
TG_BOT_TOKEN=1234:xxx
TG_CHAT_ID=1234

# EventSource Debugging URL
DEBUG_EVENT_SOURCE_URL=
```


## Docker Compose


```yml
version: '3'

services:
  app:
    image: ghcr.io/seanghay/serve-github-webhook:main
    restart: unless-stopped
    ports:
      - "127.0.0.1:8088:8080"
    env_file:
      - .env
```

## API Endpoint


```toml
[api]
url = "http://localhost:8080/api/github/webhooks"
method = "POST"
```
