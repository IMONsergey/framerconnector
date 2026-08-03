# Setup

Use this workspace with Node.js 24 or newer.

## 1. Activate Node 24

Check the current version:

```sh
node -v
```

If Node 24 is installed through Homebrew but is not active in the current shell:

```sh
export PATH="$(brew --prefix node@24)/bin:$PATH"
```

Do not remove or replace another Node.js installation unless there is a separate reason to do so.

## 2. Verify the Workspace

```sh
npm run doctor
```

Fix any critical errors before continuing.

## 3. Install the Official Framer Agent

```sh
npm run framer:setup
```

This runs the official command:

```sh
npx @framer/agent setup
```

Follow only the official installer instructions. If a browser authorization is required, complete it in the browser and do not paste credentials into the terminal, chat, or repository.

## 4. Store Private Project Data Locally Only

If the Framer editor URL must be stored locally, place it in:

```text
.local/framer-project.txt
```

The `.local/` directory is ignored by Git.
