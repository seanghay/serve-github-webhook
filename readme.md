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

---

# Snapshots

## issue_comment

### action: `created`

💬 **Codertocat** commented on an issue in `Hello-World`.

**Spelling error in the README file**

You are totally right! I'll get this fixed right away.

[View on GitHub](https://github.com/Codertocat/Hello-World/issues/1#issuecomment-492700400)

---

### action: `created`

💬 **Codertocat** commented on an issue in `Hello-World`.

**Spelling error in the README file**

You are totally right! I'll get this fixed right away.

[View on GitHub](https://github.com/Codertocat/Hello-World/issues/1#issuecomment-492700400)

---

### action: `created`

💬 **Codertocat** commented on an issue in `Hello-World`.

**Spelling error in the README file**

You are totally right! I'll get this fixed right away.

[View on GitHub](https://github.com/Codertocat/Hello-World/issues/1#issuecomment-492700400)

---

### action: `created`

💬 **Codertocat** commented on an issue in `Hello-World`.

**Spelling error in the README file**

You are totally right! I'll get this fixed right away.

[View on GitHub](https://github.com/Codertocat/Hello-World/issues/1#issuecomment-492700400)

---


## issues

### action: `opened`

🐞 **Codertocat** opened 🤝 an issue in `Hello-World`.

**Spelling error in the README file**

[View on GitHub](https://github.com/Codertocat/Hello-World/issues/1)

---

### action: `opened`

🐞 **Codertocat** opened 🤝 an issue in `Hello-World`.

**Spelling error in the README file**

[View on GitHub](https://github.com/Codertocat/Hello-World/issues/1)

---

### action: `opened`

🐞 **Codertocat** opened 🤝 an issue in `Hello-World`.

**Spelling error in the README file**

[View on GitHub](https://github.com/Codertocat/Hello-World/issues/1)

---

### action: `opened`

🐞 **Codertocat** opened 🤝 an issue in `Hello-World`.

**Spelling error in the README file**

[View on GitHub](https://github.com/Codertocat/Hello-World/issues/1)

---


## issues

### action: `reopened`

🐞 **Codertocat** reopened 🤞 an issue in `Hello-World`.

**Spelling error in the README file**

[View on GitHub](https://github.com/Codertocat/Hello-World/issues/1)

---


## package

### action: `published`

📦 A new package has published

---


## pull_request

### action: `opened`

ℹ️ **Codertocat** open a pull request in `Hello-World`.

**Update the README with new information.**
This is a pretty simple change that we need to pull into master.

[View on GitHub](https://github.com/Codertocat/Hello-World/pull/2)

---

### action: `opened`

ℹ️ **Codertocat** open a pull request in `Hello-World`.

**Update the README with new information.**


[View on GitHub](https://github.com/Codertocat/Hello-World/pull/2)

---

### action: `opened`

ℹ️ **Codertocat** open a pull request in `Hello-World`.

**Update the README with new information.**
This is a pretty simple change that we need to pull into master.

[View on GitHub](https://github.com/Codertocat/Hello-World/pull/2)

---


## release

### action: `created`

🚀 **Codertocat** created a release **** `Hello-World` 



[View on GitHub](https://github.com/Codertocat/Hello-World/releases/tag/0.0.1)

---

### action: `created`

🚀 **Codertocat** created a release **** `Hello-World` 



[View on GitHub](https://github.com/Codertocat/Hello-World/releases/tag/0.0.1)

---

### action: `created`

🚀 **Codertocat** created a release **** `Hello-World` 



[View on GitHub](https://github.com/Codertocat/Hello-World/releases/tag/0.0.1)

---


## release

### action: `edited`

🚀 **Codertocat** edit a release **** `Hello-World` 



[View on GitHub](https://github.com/Codertocat/Hello-World/releases/tag/0.0.1)

---

### action: `edited`

🚀 **Codertocat** edit a release **** `Hello-World` 



[View on GitHub](https://github.com/Codertocat/Hello-World/releases/tag/0.0.1)

---


## repository

### action: `created`

📦 **Codertocat** created a **public** repository [Octocoders/Hello-World](https://github.com/Octocoders/Hello-World)

[View on GitHub](https://github.com/Octocoders/Hello-World)




---

### action: `created`

📦 **Codertocat** created a **public** repository [Octocoders/Hello-World](https://github.com/Octocoders/Hello-World)

[View on GitHub](https://github.com/Octocoders/Hello-World)




---


