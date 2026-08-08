# GitHub workflow for this workspace

Use this workflow for small, reviewable changes to the Framer Connector workspace. Changes to a connected Framer project follow the separate approval rules in the README and are not covered by a repository pull request alone.

## Before creating a branch

1. Start from an up-to-date `main` branch.
2. Use Node.js 24 or newer.
3. Run `npm run doctor`.
4. Confirm that no private Framer editor URL, project ID, token, cookie, OAuth data, CMS export, client content, or local audit report is included.
5. Keep local-only material under `.local/`, which must remain ignored.

## Branch and commit scope

- Use a short branch name that describes one change.
- Keep documentation, diagnostic-script, and setup changes separate when they can be reviewed independently.
- Write the commit subject as an imperative summary of the change.
- Do not commit files produced by browser authorization or by `npx @framer/agent setup`.

## Validation

Run the checks that match the change:

```sh
npm run doctor
```

If setup instructions changed, verify them with the official command without committing generated authentication data:

```sh
npm run framer:setup
```

For documentation changes, also check that commands, filenames, and links agree with `README.md`, `docs/SETUP.md`, and `docs/USAGE.md`.

## Pull request

The pull request should explain:

- what changed and why;
- which files are affected;
- which validation was run;
- whether the change touches only this repository or also requires a separately approved Framer write or publish action.

Review the final diff before merging. A repository merge never authorizes changing or publishing a connected Framer project.
