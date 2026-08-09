# Release Verification

Use this checklist when a Framer connector change is ready to move from review to release.

## 1. Define the release target

Record the repository branch, Framer project, intended environment, and user-visible outcome. A release should have one explicit target rather than relying on the currently focused project or browser tab.

## 2. Validate the workspace

Run the supported diagnostics before opening a Framer editing session:

- `npm run doctor`
- `npm run framer:setup`

Resolve version, dependency, and authorization problems before applying changes. Do not copy session URLs or credentials into issues, commits, screenshots, or logs.

## 3. Review the change

Confirm that the pull request:

- contains only files required for the release;
- explains behavior and operational impact;
- does not include generated private reports;
- keeps preview assets separate from published assets;
- identifies any manual Framer action still required.

## 4. Verify by state

Treat each state independently:

| State | Evidence |
| --- | --- |
| Local | diagnostics and focused diff |
| Connected | correct workspace and project confirmed |
| Previewed | visual output reviewed at intended breakpoints |
| Published | remote project or site shows the change |
| Rechecked | published output reopened and tested |

Do not use evidence from an earlier state as proof of a later one.

## 5. Visual checks

For a visual release, verify desktop and mobile layout, image loading, text overflow, focus behavior, and intended motion. Scroll the full page so lazy content loads before declaring the check complete.

## 6. Failure handling

If any verification fails:

1. stop the release;
2. preserve the smallest useful error message;
3. remove credentials and private identifiers;
4. document the last confirmed state;
5. open a focused follow-up change.

## 7. Completion

A release is complete only when the pull request is merged and the intended remote result is verified. Record the merged pull request and any follow-up issue. Remove temporary public access when it is no longer needed.
