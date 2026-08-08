# Review checklist

Use this checklist when reviewing changes to the Framer Connector workspace. It focuses on repository safety and on keeping repository approval separate from authorization to modify a connected Framer project.

## Scope

- [ ] The pull request has one clear purpose.
- [ ] The changed files match the stated purpose.
- [ ] Documentation, diagnostics, and setup changes are separated when independent review is possible.
- [ ] No unrelated formatting or generated files are included.

## Security and privacy

- [ ] The diff contains no Framer editor URL, project ID, token, cookie, OAuth data, API key, client content, CMS export, or private audit output.
- [ ] Local-only examples use `.local/` and do not weaken `.gitignore`.
- [ ] Commands do not print credentials or secret file contents.
- [ ] The change continues to use the official `@framer/agent` package and does not introduce an unofficial MCP, proxy, or credential bridge.

## Documentation

- [ ] Commands and filenames match `package.json` and the repository tree.
- [ ] Node.js requirements remain consistent with `.nvmrc` and the `>=24` engine requirement.
- [ ] Setup guidance distinguishes `npm run doctor` from `npm run framer:setup`.
- [ ] Troubleshooting steps avoid insecure TLS workarounds and keep any CA-bundle workaround limited to the affected command.
- [ ] Links and code blocks render correctly.

## Validation

- [ ] `npm run doctor` passes for changes to scripts, setup, or tracked-file rules.
- [ ] Any new diagnostic has both a success path and an actionable failure message.
- [ ] Documentation-only changes have been checked against `README.md`, `docs/SETUP.md`, `docs/USAGE.md`, and `docs/TROUBLESHOOTING.md`.
- [ ] Review criteria remain consistent with `docs/github-workflow.md`.
- [ ] The final diff has been reviewed after the branch was updated from `main`.

## Framer boundary

- [ ] The pull request does not claim to authorize a write to a connected Framer project.
- [ ] Any planned Framer write identifies the affected page, component, CMS collection, or code file and still requires separate approval.
- [ ] Publication is treated as a separate explicit action.

Approve the pull request only when every applicable item is satisfied or the remaining exception is documented in the review.
