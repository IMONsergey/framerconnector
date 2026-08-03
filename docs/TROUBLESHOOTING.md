# Troubleshooting

## Node.js Version Error

The official Framer External Agent requires Node.js 24 or newer.

Check:

```sh
node -v
```

If Homebrew `node@24` is installed:

```sh
export PATH="$(brew --prefix node@24)/bin:$PATH"
```

Then re-run:

```sh
npm run doctor
```

## npm or npx Is Missing

Use the npm and npx binaries that come with the active Node.js installation. Re-check:

```sh
npm -v
npx --version
```

## Official Setup Hangs or Fails

Check network access to the npm registry and rerun:

```sh
npx @framer/agent setup
```

Do not replace this with unofficial Framer MCP packages.

If npm reports `UNABLE_TO_GET_ISSUER_CERT_LOCALLY` but system tools can reach the registry, run the command with the Homebrew CA bundle:

```sh
NODE_EXTRA_CA_CERTS="$(brew --prefix)/etc/ca-certificates/cert.pem" npx @framer/agent setup
```

Do not disable `strict-ssl` globally.

## Browser Authorization Required

Complete the authorization in the browser. Do not paste cookies, tokens, or OAuth data into this repository.

## Private Data Was Added by Accident

Remove the file from the working tree or Git index before committing:

```sh
git status
git diff
git ls-files
```

Do not include secret values in issue reports, logs, or commit messages.
