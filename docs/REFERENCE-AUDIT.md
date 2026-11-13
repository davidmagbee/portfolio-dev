# Reference audit

Reviewed for the initial portfolio-dev implementation, 2026-11-13. This document distinguishes observed source behavior from design judgment. It does not establish that a live deployment matches its repository.

## Sources and scope

- Portfolio reference: [emmanuel.live](https://emmanuel.live/) and [emmanuel-defreitas/resume](https://github.com/emmanuel-defreitas/resume). Source inspected at [`cc9177e6d21b60bcd5f168cabf34c4a0731e0a1e`](https://github.com/emmanuel-defreitas/resume/tree/cc9177e6d21b60bcd5f168cabf34c4a0731e0a1e).
- Investigation tooling reference: [rea.tools](https://rea.tools/) and [morluto/rea](https://github.com/morluto/rea). Source inspected at [`cdc4541ef707f256f83abe5018df01a25182cf0b`](https://github.com/morluto/rea/tree/cdc4541ef707f256f83abe5018df01a25182cf0b).
- Additional supplied URL: [emmanuel-three.vercel.app](https://emmanuel-three.vercel.app/). Fetch failed during this audit; equivalence to the custom domain remains unknown.

## Proven: implementation and interaction patterns

“Proven” below means present in the inspected source, not independently verified across all browsers or deployments.

| Finding                                                                                                                                                                                                                                                               | Source evidence                                                                                                                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Static HTML, inline CSS and JavaScript, local media and a serverless chat endpoint. No React frontend is present in the inspected source.                                                                                                                             | [index.html](https://github.com/emmanuel-defreitas/resume/blob/cc9177e6d21b60bcd5f168cabf34c4a0731e0a1e/index.html), [package.json](https://github.com/emmanuel-defreitas/resume/blob/cc9177e6d21b60bcd5f168cabf34c4a0731e0a1e/package.json), [api/chat.js](https://github.com/emmanuel-defreitas/resume/blob/cc9177e6d21b60bcd5f168cabf34c4a0731e0a1e/api/chat.js) |
| Dark cool surfaces, mint accent, display/body/monospace typography, fine borders, rounded containers and a fixed pill navigation.                                                                                                                                     | [Tokens and navigation styles](https://github.com/emmanuel-defreitas/resume/blob/cc9177e6d21b60bcd5f168cabf34c4a0731e0a1e/index.html#L14)                                                                                                                                                                                                                           |
| Narrative progresses through profile, professional experience, toolkit, current projects, education and contact.                                                                                                                                                      | [Content sections](https://github.com/emmanuel-defreitas/resume/blob/cc9177e6d21b60bcd5f168cabf34c4a0731e0a1e/index.html#L794)                                                                                                                                                                                                                                      |
| Canvas portrait maps brightness digits to ASCII glyphs. A cached base image receives a brighter cursor-centered radial reveal and localized character changes. Reduced-motion preference selects a static rendering; portrait is hidden below the desktop breakpoint. | [Portrait styles](https://github.com/emmanuel-defreitas/resume/blob/cc9177e6d21b60bcd5f168cabf34c4a0731e0a1e/index.html#L665), [Portrait logic](https://github.com/emmanuel-defreitas/resume/blob/cc9177e6d21b60bcd5f168cabf34c4a0731e0a1e/index.html#L1505)                                                                                                        |
| Theme choice persists locally. IntersectionObserver reveals sections; reduced-motion bypasses reveal animation.                                                                                                                                                       | [Theme and reveal logic](https://github.com/emmanuel-defreitas/resume/blob/cc9177e6d21b60bcd5f168cabf34c4a0731e0a1e/index.html#L1475)                                                                                                                                                                                                                               |
| Contribution graph fetches a third-party contribution API and adds an entrance wave, animated cells and proximity hover glow.                                                                                                                                         | [Graph logic](https://github.com/emmanuel-defreitas/resume/blob/cc9177e6d21b60bcd5f168cabf34c4a0731e0a1e/index.html#L1624)                                                                                                                                                                                                                                          |
| Screening dialog requests model answers and falls back to hardcoded FAQ/STAR answers. Some fallback results contain the literal qualification “Demo copy.”                                                                                                            | [Screening data](https://github.com/emmanuel-defreitas/resume/blob/cc9177e6d21b60bcd5f168cabf34c4a0731e0a1e/index.html#L1804), [Request and fallback logic](https://github.com/emmanuel-defreitas/resume/blob/cc9177e6d21b60bcd5f168cabf34c4a0731e0a1e/index.html#L1955)                                                                                            |
| Download dialog offers browser print and a generated DOCX. Dialog keyboard handling includes Escape, focus return and Tab wrapping.                                                                                                                                   | [Download actions and dialog handling](https://github.com/emmanuel-defreitas/resume/blob/cc9177e6d21b60bcd5f168cabf34c4a0731e0a1e/index.html#L2534)                                                                                                                                                                                                                 |

## Inference: patterns adapted for David

These are implementation decisions, not claims about either engineer's achievements.

- Adapt restrained dark/mint editorial styling, strong typography, clear experience chronology and substantive project descriptions.
- Use an original composition, original code and David's supported biography. Do not transfer another engineer's résumé language, metrics, portrait, logos or generated answers.
- Use a Next.js static export for a typed, maintainable content structure. The reference's runtime/framework choices are not requirements.
- Offer a curated, source-backed guide to David's experience and projects. Label it accurately; it is not an LLM or an open-ended AI assistant.
- Keep approved résumé downloads separate from the website's print presentation. Avoid maintaining a second résumé generator in the client.
- Respect reduced-motion preferences and support keyboard navigation. Validate these in the new implementation; the reference's source alone does not prove accessibility conformance.

## Inference: patterns deliberately avoided

- No copied source or third-party personal assets: no explicit reuse license was found for the portfolio reference.
- No live contribution requests: a third-party proxy creates an availability dependency, and activity counts do not establish engineering impact.
- No LLM endpoint: initial recruiter answers should remain bounded by supported facts. Model answers add claim-drift, provider configuration and usage-cost concerns. The reference itself configures a paid fallback model and describes its rate limit as best effort per instance. See [API limits](https://github.com/emmanuel-defreitas/resume/blob/cc9177e6d21b60bcd5f168cabf34c4a0731e0a1e/api/chat.js#L23) and [model fallbacks](https://github.com/emmanuel-defreitas/resume/blob/cc9177e6d21b60bcd5f168cabf34c4a0731e0a1e/api/chat.js#L153).
- No default interaction audio: visual feedback suffices for this initial portfolio.

## Proven license evidence; unknown reuse permission

- Emmanuel's repository metadata returned `license: null`, and its complete tree contained no license file at the inspected commit. Evidence: [repository metadata endpoint](https://api.github.com/repos/emmanuel-defreitas/resume) and [pinned tree](https://github.com/emmanuel-defreitas/resume/tree/cc9177e6d21b60bcd5f168cabf34c4a0731e0a1e). The metadata endpoint is mutable; the observation above records this audit's result.
- **Unknown:** permission to copy that implementation or its personal assets. Public source visibility does not provide evidence of a reuse grant. This project therefore uses original implementation and owned content.
- REA-authored code has an [MIT license](https://github.com/morluto/rea/blob/cdc4541ef707f256f83abe5018df01a25182cf0b/LICENSE). Its README distinguishes separately licensed third-party material: [license guidance](https://github.com/morluto/rea/blob/cdc4541ef707f256f83abe5018df01a25182cf0b/README.md#license). No REA code is incorporated into this portfolio.

## REA decision

**Proven:** REA supports passive browser inspection, source capture, network observations and screenshots through CDP. Its setup registers an MCP server and installs matching workflow instructions. See [browser observation guide](https://github.com/morluto/rea/blob/cdc4541ef707f256f83abe5018df01a25182cf0b/docs/guides/web/browser-observation.md) and [setup instructions](https://github.com/morluto/rea/blob/cdc4541ef707f256f83abe5018df01a25182cf0b/README.md#quick-start).

**Inference/decision:** installing REA adds little value for this task because the reference's unbundled source is directly available. Direct source inspection plus browser verification of the new portfolio addresses the current brief. REA remains an option for future investigations of unavailable or bundled source.

No REA installation or global agent configuration changes were made for this audit.

## Remaining unknowns

- Whether either live reference domain runs the exact inspected commit.
- Whether the alternate Vercel domain and custom domain are identical deployments.
- Whether all reference interactions satisfy accessibility or performance requirements; this was a source/design audit, not an exhaustive product assessment.
- Any future changes to reference code, licenses or tooling beyond the pinned revisions.
