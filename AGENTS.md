# Website contribution workflow

- This repository stores the source for the Städ och service AB website. The site is static HTML, CSS, and JavaScript; there is no build step.
- The owner has requested that website edits made with the assistant be committed and pushed to `main` after appropriate verification. Fetch current changes first, preserve unrelated edits, and confirm the remote commit after pushing.
- A pull request is not required for routine changes unless the owner asks for one or branch protection requires it. Never force-push or bypass branch protections.
- Keep HTML, CSS, JavaScript, images, and documentation together in this repository. Do not commit credentials, environment secrets, or provider-specific deployment credentials.
- Do not enable GitHub Pages or configure automatic deployment unless the owner requests hosting.
- Preserve the Swedish language, blue theme, company identity, and supplied contact addresses unless asked to change them. The quote form opens an email draft; do not claim it sends mail automatically.
- Run `node --check app.js` when JavaScript changes and `git diff --check` for text changes. Check relevant links and assets when modifying them. Report any verification that could not be completed.
- Repository synchronization happens while completing requested edits; no background file watcher is configured.
- Keep the tracked `strato/` upload folder in sync with website changes by running `node scripts/export-strato.mjs` before committing. Edit source files at the repository root, not the generated copies. Remove obsolete generated files explicitly when deleting or renaming original files. See `STRATO.md` for upload instructions; generating the folder does not authorize uploading to STRATO.
