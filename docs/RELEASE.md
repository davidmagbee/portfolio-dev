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

Build David Magbee’s original portfolio in a separate repository. Visitors can explore source-supported career/project content, filter live versus development work, read expandable engineering notes, switch light/dark themes, view/download the résumé, and reach the existing Google booking listing. A native dialog offers curated answers about David’s work and career direction.

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

Public webpage copy avoids unverified performance metrics. The downloadable résumé is the unchanged approved original, restored after David confirmed its quantitative and outcome claims. The “4.9/5 NPS” metric name awaits his clarification; the PDF retains approved wording. RESUME-CHANGES.json is a superseded historical record of the initial derivative. Third-party app Google sign-in, email delivery and account-linking flows were not exercised as part of this portfolio task. No claim that those flows pass is implied by a project link.

A new owner-private Sites preview is separate from the public source repository and the existing custom-domain portfolio.

## PR body delta

### Follow-up: approved résumé restoration

**Commit:** `fix(resume): restore unchanged approved resume assets`

**Change:** Restore byte-identical approved PDF and DOCX assets following David’s confirmation. Keep existing view/download URLs. Update README, evidence register and release limits; mark the initial derivative’s substitution record superseded. Page copy and visitor controls are unchanged.

**Content evidence:** David’s November 13, 2026 reply confirms the counts and outcomes and explicitly selects the unchanged PDF. These remain owner-confirmed, source-reported claims. Clarification of the original “4.9/5 NPS” label is pending; no inferred relabeling is applied.

**Verification:** `npm run check` and `npm run build`; compare approved originals against public and exported PDF/DOCX bytes; confirm view/download links still resolve to `/David-Magbee-Resume.pdf`.

**Limits:** No independent measurement audit. Keep “4.9/5 NPS” clarification open until David supplies corrected terminology.

**Staging:** one cohesive restoration:

```sh
git add public/David-Magbee-Resume.pdf public/David-Magbee-Resume.docx README.md docs/CONTENT-SOURCES.md docs/RESUME-CHANGES.json docs/RELEASE.md
git commit -m "fix(resume): restore unchanged approved resume assets"
git push origin main
```

**Manual QA:** open View résumé and Download PDF; compare each served file to the approved original, including the retained quantitative wording. Check that the PDF URL remains unchanged and the evidence register identifies the pending label clarification.

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
