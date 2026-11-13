# Portfolio development

- Keep biography and project claims traceable to `docs/CONTENT-SOURCES.md`. Employment is source-reported, not independently verified. Do not invent metrics, credentials, production AI work, or outcomes.
- Ask David when a content gap materially affects the claim. Keep stated future goals separate from past experience.
- Use original implementation/assets. The reference portfolio has no declared reuse license; see `docs/REFERENCE-AUDIT.md`.
- Add in-code documentation for changed non-obvious logic. Keep career/project content in `data/profile.ts` and update evidence when changing it.
- Never copy `.env` values or credentials into source, screenshots, logs, or commits.
- Run `npm run check` and `npm run build`; manually verify affected visitor flows. Review responsive layout, keyboard behavior, and both themes for UI changes.
- Preserve existing résumé and scheduler destinations unless David asks to change them.
- Build mobile-first with ascending responsive breakpoints. Keep project cards equal in height and their actions aligned; never clip substantive text to force the layout.
- David explicitly approved deployment of the reviewed mobile-first replacement to the existing portfolio on November 13, 2026. Do not change DNS or registrar settings.
- Report semantic commit message, staging groups if multiple tasks, PR body/delta, and manual QA. Follow `.github/pull_request_template.md`.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
