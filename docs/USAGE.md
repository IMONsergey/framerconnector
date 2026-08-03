# Usage

This repository supports safe Codex work with Framer through the official Framer External Agent.

## Daily Start

```sh
npm run doctor
```

If the official Framer Agent is missing or broken:

```sh
npm run framer:setup
```

## Connecting to a Project

Use the full Framer editor URL only when requested for a real connection. Keep it out of tracked files.

The first connection must be read-only. Do not edit or publish during initial inspection.

## Read-Only Audit Checklist

Collect only the categories returned by the official agent:

- authorization status
- project accessibility
- pages
- high-level sections and canvas nodes
- components
- code components and code files
- CMS collections
- CMS field names
- CMS record counts without sensitive record content
- locales
- redirects
- color styles
- text styles
- assets
- publication state
- pending changes
- API limitations

Save private reports only under `.local/`.

## Write Workflow

Before any write:

1. Prepare a change plan.
2. List exact target objects.
3. Explain validation.
4. Wait for explicit approval.
5. Apply the approved change only.
6. Verify through the official agent.

Publishing always requires separate explicit approval.
