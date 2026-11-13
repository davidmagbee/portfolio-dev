# Portfolio development

- Keep biography and project claims traceable to `docs/CONTENT-SOURCES.md`. Employment is source-reported, not independently verified. Do not invent metrics, credentials, production AI work, or outcomes.
- Ask David when a content gap materially affects the claim. Keep stated future goals separate from past experience.
- Use original implementation/assets. The reference portfolio has no declared reuse license; see `docs/REFERENCE-AUDIT.md`.
- Add in-code documentation for changed non-obvious logic. Keep career/project content in `data/profile.ts` and update evidence when changing it.
- Never copy `.env` values or credentials into source, screenshots, logs, or commits.
- Run `npm run check` and `npm run build`; manually verify affected visitor flows. Review responsive layout, keyboard behavior, and both themes for UI changes.
- Preserve existing résumé and scheduler destinations unless David asks to change them.
- Report semantic commit message, staging groups if multiple tasks, PR body/delta, and manual QA. Follow `.github/pull_request_template.md`.
