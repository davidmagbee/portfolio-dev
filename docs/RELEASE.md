# Initial portfolio release

## Commit

`feat(portfolio): build evidence-grounded engineering portfolio`

## Staging

This is one cohesive initial release. Run from the new repository:

```sh
git add AGENTS.md README.md .gitignore .prettierrc.json .github .openai app components data docs next-env.d.ts next.config.ts package.json package-lock.json tsconfig.json public
git commit -m "feat(portfolio): build evidence-grounded engineering portfolio"
git push -u origin main
```

The new repository is `davidmagbee/portfolio-dev`. Do not stage or change the sibling `portfolio-modern` project.

## PR body

### Change

Build David Magbee’s original portfolio in a separate repository. Visitors can explore verified career/project content, filter live versus development work, read expandable engineering notes, switch light/dark themes, view/download the résumé, and reach the existing Google booking listing. A native dialog offers curated answers about David’s work and career direction.

Use Next.js and TypeScript with static export, locally bundled fonts, an owned portrait and existing project screenshots. Document the source audit and content evidence. Add CI type checking and production builds.

### Content evidence

See [CONTENT-SOURCES.md](CONTENT-SOURCES.md). Employment is source-reported; project descriptions follow current owning repositories; future AI/architecture direction follows David’s instruction. Additional RepairVantage features are described as development work. Redwood remains a private development preview. The guide uses authored answers and makes no generative-AI claim.

### Verification

- `npm run check` and `npm run build` passed locally.
- Production static output returned HTTP 200 for the page and résumé.
- Browser: both themes render; light-theme choice survives reload.
- Project filters show three total, two live, and one development project.
- All internal anchors resolve; no broken image elements or console warnings/errors were observed.
- Guide answers switch; Escape closes it and returns focus to its trigger.
- PDF browser download completed successfully.
- Existing scheduler resolves to David Magbee’s “Let’s Connect” listing with selectable times; no appointment was created.
- Desktop and 390px mobile views inspected. Mobile document width equals viewport width.
- Faint text contrast was corrected and calculated above 4.5:1 against every shared surface in both themes.

### Limits

Public webpage copy avoids unverified performance metrics. The downloadable résumé is a metric-free derivative of the approved original; exact substitutions are recorded in RESUME-CHANGES.json. Detailed experience is preserved; originals remain unchanged. Third-party app Google sign-in, email delivery and account-linking flows were not exercised as part of this portfolio task. No claim that those flows pass is implied by a project link.

A new owner-private Sites preview is separate from the public source repository and the existing custom-domain portfolio.

## PR body delta

Not applicable: initial implementation; no earlier code push or PR description exists.

## Manual QA

1. Open the preview at desktop and mobile widths; follow Work, Experience, Toolkit and contact links. Confirm readable layout and no horizontal scrolling.
2. Toggle light/dark, reload, and confirm the selected theme persists. Try keyboard focus through navigation and action controls.
3. Open “Ask about my work,” select every question, follow its internal link, reopen, then press Escape. Confirm focus returns and scrolling resumes.
4. Select All work, Live and In development. Check counts, project destinations and status wording. Expand engineering notes; development-only features must not read as live.
5. Expand/collapse each career entry and compare titles, month-level dates and contributions to the approved evidence.
6. View the résumé in a new tab and download it. Open the downloaded PDF and verify expected content and readable pages.
7. Open Schedule a conversation. Confirm David Magbee / “Let’s Connect” appears. Stop before submitting a booking unless intentionally scheduling.
8. Confirm GitHub/LinkedIn/email links and the source link. Verify no sound/music controls or playback exist.
9. Inspect print preview; use the downloadable PDF as the authoritative résumé artifact.

## UI evidence

Screenshots under `preview/` record inspected local production-export views. They are illustrative snapshots, not a claim of automated accessibility certification.
