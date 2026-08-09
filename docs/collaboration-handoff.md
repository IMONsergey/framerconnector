# Collaboration Handoff

This guide defines how contributors hand off Framer connector changes for review and release. It keeps project access, generated artifacts, and verification evidence separate.

## Before editing

- Run `npm run doctor` and resolve environment problems before changing project files.
- Confirm the intended Framer workspace and project before starting a session.
- Keep private session URLs, authorization details, and generated reports out of commits.
- Create a focused branch for one reviewable outcome.

## Change boundaries

A pull request should state which layer it changes:

1. local workspace scripts or documentation;
2. Framer project structure or content;
3. generated preview assets;
4. release or deployment behavior.

Do not mix unrelated layers without explaining why they must move together.

## Handoff checklist

Before requesting review:

- describe the user-visible result and the files changed;
- list the commands used to validate the change;
- confirm that no credentials, session identifiers, or private URLs are present;
- verify that generated assets belong in the repository;
- note any action that still requires access to the Framer editor;
- include screenshots only when they clarify a visual decision;
- identify follow-up work separately from the current change.

## Review evidence

Use the smallest evidence set that proves the result:

- command output for workspace diagnostics;
- a focused diff for code and documentation;
- a preview for visual changes;
- a browser check for published behavior.

A successful local command does not prove a remote Framer change. Likewise, a preview does not prove publication. Label each piece of evidence by the state it actually verifies.

## Co-author workflow

When two contributors materially shape one commit, preserve both contributions with a valid `Co-authored-by` trailer in the commit message. Agree on the final diff and attribution before merging.

For follow-up changes, prefer an additional commit in the same branch when it improves review history. Use a separate pull request when the new work has a different goal or risk profile.

## After merge

- Confirm the pull request shows **Merged**.
- Re-run any release-specific verification.
- Record unresolved risks in a new issue or follow-up pull request.
- Remove temporary public access or preview artifacts that are no longer required.

This process keeps collaboration traceable without treating discovery, preview, publication, and verification as the same state.
