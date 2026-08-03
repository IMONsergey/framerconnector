# Framer Connector Workspace

This repository is an operational workspace for connecting Codex to Framer through the official Framer External Agent.

It is not a custom MCP server, application, proxy, or UI. Do not add unofficial Framer MCP packages here.

## Requirements

- Node.js 24 or newer
- npm and npx
- Git
- Codex CLI or Codex Desktop
- Access to the target Framer editor project URL

If Node 24 is installed with Homebrew but is not the default Node, start a shell with:

```sh
export PATH="$(brew --prefix node@24)/bin:$PATH"
```

Then verify:

```sh
node -v
npm -v
npx --version
```

## Installation

Run the workspace diagnostics first:

```sh
npm run doctor
```

Run the official Framer External Agent setup:

```sh
npm run framer:setup
```

This script runs:

```sh
npx @framer/agent setup
```

Allow the official setup command to create local Codex configuration and skills if prompted. Do not move credentials or generated authentication files into this repository.

## Diagnostics

Use:

```sh
npm run doctor
```

The doctor checks Node.js version, npm/npx availability, Git availability, required workspace files, and tracked files that look like local secrets or credentials by filename. It does not read or print secret file contents.

## Safe Connection Process

1. Run `npm run doctor`.
2. Run `npm run framer:setup` if the official Framer Agent is not installed or needs repair.
3. Keep the Framer editor URL out of Git.
4. If a local copy of the editor URL is needed, store it only in `.local/framer-project.txt`.
5. Connect to the project with the official Framer External Agent.
6. Start in read-only audit mode.

Never commit private project URLs, project IDs, cookies, tokens, OAuth data, API keys, client content, CMS exports, or private audit reports.

## First Audit

The first connection to a real project must only inspect available data. Do not change pages, text, styles, CMS data, components, project settings, domains, redirects, or publication state.

Capture only safe categories:

- authorization status
- project accessibility
- pages and high-level canvas structure
- components
- code components and code files
- CMS collections and field names
- CMS record counts without sensitive record content
- locales
- redirects
- color styles
- text styles
- asset inventory
- publication state
- pending changes
- API limitations encountered

Store any private report only under `.local/`.

## Change and Publish Rules

Do not write to Framer without an explicit plan and separate approval.

Do not publish a Framer project without explicit approval for that exact publish action.

Before any write action:

1. Explain the intended change list.
2. Confirm the affected pages, components, CMS collections, or code files.
3. State the validation plan.
4. Wait for explicit approval.

## Common Issues

### Node.js is below 24

Install or activate Node 24. With Homebrew:

```sh
brew install node@24
export PATH="$(brew --prefix node@24)/bin:$PATH"
```

### `npx @framer/agent setup` cannot run

Check network access, npm registry access, and the current Node.js version. Re-run:

```sh
npx @framer/agent setup
```

If npm fails with a local issuer certificate error while `curl` can reach the registry, use the Homebrew CA bundle only for that command:

```sh
NODE_EXTRA_CA_CERTS="$(brew --prefix)/etc/ca-certificates/cert.pem" npx @framer/agent setup
```

### Codex does not see the Framer skill

Re-run the official setup command and restart the Codex session if the installer indicates that newly installed skills require reload.

### Authentication opens a browser

Complete the Framer browser authorization in the browser. Do not paste tokens or cookies into chat or commit them to Git.

### Private project URL appears in a tracked file

Remove it before committing. Private URLs belong only in `.local/framer-project.txt` or another ignored file under `.local/`.
