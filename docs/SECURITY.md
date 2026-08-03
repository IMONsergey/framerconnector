# Security

This repository is public. Treat every committed file as publicly visible.

## Never Commit

- Framer editor URLs
- Framer project IDs
- client content
- private audit reports
- cookies
- OAuth data
- API keys
- access tokens
- credentials
- `.env` files
- generated authentication files

## Allowed

- safe documentation
- diagnostic scripts
- placeholder examples
- `.env.example` with placeholders only

## Local Private Storage

Use `.local/` for private local-only data. Examples:

```text
.local/framer-project.txt
.local/framer-connection-report.md
.local/operations.log
```

Files under `.local/` must never be committed.

## Before Commit

Run:

```sh
npm run doctor
git status
git diff
git ls-files
```

Also inspect filenames that include words such as token, secret, credential, auth, or private. Do not print secret contents during checks.
