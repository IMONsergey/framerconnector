# Codex Operating Instructions

Before doing any work in this repository, read `README.md` and this file.

This repository is only an operational workspace for the official Framer External Agent. Do not create a custom Framer MCP server and do not install unofficial Framer MCP packages.

## Startup Checks

- Verify Node.js is version 24 or newer.
- Verify npm and npx are available.
- Verify the official Framer Agent setup is available or run `npm run framer:setup`.
- Run `npm run doctor` before committing.
- Keep a short local operation log under `.local/` when working on a real project.

## Default Framer Mode

- Work read-only by default.
- Begin real project work with an audit of available data and API limitations.
- Do not claim that data exists unless the official agent returned it.
- Do not store private project URLs in tracked files.
- Do not commit client content, private reports, CMS exports, project IDs, or project URLs.

## Before Any Framer Write

- Show a concrete plan first.
- List the exact proposed changes before writing.
- Identify affected pages, components, code files, CMS collections, or settings.
- Wait for explicit approval.
- After every approved change, verify the result through the official agent.

## Prohibited Actions Without Explicit Approval

- Publishing a Framer project.
- Deleting pages.
- Deleting CMS records.
- Editing domain settings.
- Changing project settings outside the supported External Agent surface.
- Replacing large page structures without an audit and plan.

## Design and Code Work

- Preserve the existing project structure first.
- For design work, audit the current structure before editing.
- For code components, run the available TypeScript or code validation before reporting completion.
- Keep changes narrow and reversible.

## Security

- Never store tokens, cookies, OAuth data, API keys, or credentials in Git.
- Never print secret values in logs, docs, terminal summaries, or final reports.
- Keep `.local/` fully ignored.
- Keep private audit reports under `.local/`.
- Do not add `.env` files to Git. `.env.example` is allowed if it contains placeholders only.
