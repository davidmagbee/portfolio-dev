# davidmagbee.com replacement plan

**State: review only. Owner approval is required before any deployment, including previews or private Sites publication, and before changing Vercel Git connections, project settings, aliases or DNS.** Nothing in the execution plan below has been executed.

Inspected November 13, 2026. **Fact** means directly observed source or platform state. **Inference** means a proposed implementation choice. **Unknown** means not established. Refresh changeable platform facts immediately before an approved release.

## Verified current production

| Item | Observed value | Evidence |
| --- | --- | --- |
| Account/team | `davidmagbee's projects`; slug `davidmagbees-projects`; ID `team_MSPqwkNslPXK5W2zf352OsGe` | Authenticated Vercel `list_teams` |
| Project | `portfolio-modern`; ID `prj_RurCayr1pcA9OQM8vs1udmApMebY` | Vercel `get_project`; read-only CLI project inspection |
| Connected source | `davidmagbee/portfolio-modern`, GitHub; production branch `main` | Authenticated GET `/v9/projects/prj_RurCayr1pcA9OQM8vs1udmApMebY`, selecting non-secret settings only |
| Production deployment / rollback baseline | `dpl_FmmiadpUwY4qjpwHQNJi93ADyVR9`; `READY`, production | Vercel `get_deployment` and both domain alias records |
| Immutable deployment URL | [portfolio-modern-l85oexfah-davidmagbees-projects.vercel.app](https://portfolio-modern-l85oexfah-davidmagbees-projects.vercel.app/) | Deployment and alias records |
| Production source commit | `b36dcdcfebcf73ffbb2df91dcd637ac5b1662bac` | Deployment Git metadata: `main`, `davidmagbee/portfolio-modern` |
| Apex domain | [davidmagbee.com](https://davidmagbee.com/), verified; points to the deployment above | `get_alias`, `list_project_domains`; homepage GET returned 200 |
| `www` domain | Verified; same deployment; redirect to `davidmagbee.com`, status 308 | `get_alias`, `list_project_domains` |
| Build settings | Framework `nextjs`; Node `24.x`; build/install/dev/output/root overrides all `null` | Read-only `vercel project inspect portfolio-modern --scope davidmagbees-projects --format=json` and project API |
| Automatic domain assignment | `true` | Read-only project API |
| Requested local link file | `/Users/interface/code/portfolio-modern/.vercel/project.json` was absent | Filesystem inspection; account records above established the target instead |

These are **facts at inspection**, not guarantees that production will remain unchanged. No secret values were printed, copied into this repository or needed for the new site. Vercel's compact connector response omitted Git/build details, so read-only CLI/API inspection supplied those fields. No mutating CLI command was run.

## Proposed project strategy

**Inference / recommendation: reuse the existing Vercel project and reconnect its Git source to [davidmagbee/portfolio-dev](https://github.com/davidmagbee/portfolio-dev) after approval.** Keep `portfolio-dev` as the canonical source and `main` as its eventual production branch. The reviewed work is on `dev/mobile-first-portfolio`; record its final merged commit before release. A mutable branch name is not a release identifier.

| Option | Benefit | Cost / boundary |
| --- | --- | --- |
| Reuse `portfolio-modern`, connect `portfolio-dev` | Preserves domain assignments and existing deployment history; the recorded old build remains in the same project for rollback. New GitHub repository still owns all future source changes. | Git connection must change. Legacy environment settings remain until a separately reviewed cleanup. Project name remains cosmetic; no rename is necessary for launch. |
| New Vercel project connected to `portfolio-dev` | Fresh settings and no inherited legacy environment variables. | Requires moving both domains and preserving the `www` redirect. Cross-project recovery also requires moving domains back; a rollback in the new project alone cannot select an old-project deployment. No new project was created. |

Do not copy the new site into the old GitHub repository merely to satisfy the old connection. Vercel documents project-level [Git connections](https://vercel.com/docs/cli/git) and [domain reassignment](https://vercel.com/docs/domains/set-up-custom-domain). Same-project reuse avoids a planned DNS or registrar change. Authoritative DNS/registrar configuration was not inspected; no ownership transfer is proposed.

## Static build contract

**Facts:** [`next.config.ts`](../next.config.ts) uses `output: 'export'`, `trailingSlash: true` and unoptimized local images. [`package.json`](../package.json) builds with `next build`. The inspected local `.next/export-detail.json` reported `success: true` and `outDirectory: /Users/interface/code/portfolio-dev/out`; `out/index.html` existed. This is build-output evidence, not proof of a deployed candidate or of later working-tree changes.

**Source-backed expected Vercel behavior:** retain the `nextjs` framework preset and default build/output detection. Next.js documents [static output in `out/`](https://nextjs.org/docs/app/guides/static-exports). Vercel's inspected [Next.js builder](https://github.com/vercel/vercel/blob/155eacfa16840e68ae54bc50ee72fc8e16733857/packages/next/src/index.ts#L1031) detects a successful export, reads its `outDirectory` and collects those static files. No `outputDirectory`, framework, build or install override is added solely to restate that behavior.

[`vercel.json`](../vercel.json) contains only the two legacy image redirects below. Its documented [redirect schema](https://vercel.com/docs/project-configuration/vercel-json#redirects) uses `source`, `destination` and `permanent: false` for status 307. `.openai/hosting.json` is a separate Sites manifest; it does not configure Vercel and does not authorize publication.

**Unknown until an approved deployment:** exact remote builder behavior for the final commit, deployed redirect handling and the served export contents. Check the staged deployment's build log and actual HTML/assets. If detection fails, inspect the failure before proposing a specific override; do not switch presets speculatively.

## Compatibility and intentional behavior changes

| Existing URL / behavior | Fact at inspection | Replacement requirement |
| --- | --- | --- |
| `/#hero`, `/#skills`, `/#projects` | Present in live HTML and existing source | Retain fragment alias IDs at the new introduction, toolkit and work sections. Fragment routing needs HTML targets, not server redirects. Root implementation owns these aliases. |
| `/#about`, `/#experience`, `/#contact` | Existing section targets | Keep working in the new page. |
| `/projects/repairvantage.png` | Live linked screenshot, HEAD 200 | Tracked Vercel 307 redirect to `/projects/repairvantage.jpg`. The new image is visibly identified as prototype/demo material; it is not proof that development features are live. |
| `/projects/small-wins.png` | Live linked screenshot, HEAD 200 | Tracked Vercel 307 redirect to `/projects/small-wins.jpg`. |
| `/projects/redwood-development.jpg` | Live linked screenshot, HEAD 200 | Preserve the path and development/demo qualification. |
| `/favicon.ico` | HEAD 200 on current site | Preserve the existing owned icon unchanged. Root implementation owns the compatibility copy. |
| `/David-Magbee-Resume.pdf`, `/David-Magbee-Resume.docx`, `/resume.pdf` | Each returned 404 on current production | The first two become new public download paths. Preserve approved original PDF/DOCX bytes. There is no verified old `/resume.pdf` success contract to claim restored. |
| In-page contact form and `POST /api/contact` | Existing source verifies Turnstile and sends through Resend; HEAD on the current API returned 405 | **Intentional retirement:** new static site uses email and the existing scheduling URL; no form server or delivery confirmation. User approval must include this visible behavior change. No test message was sent. |
| `/sanity` and legacy `/api/pageInfo`, `/api/experience`, `/api/projects`, `/api/socials`, `/api/skills` | Present in the old source | New site reads reviewed local data and does not preserve a CMS editor or these APIs. External consumers are unknown. Do not mask missing APIs with a catch-all HTML rewrite. |

The live URL observations were GET/HEAD only. Legacy source evidence: [homepage](https://github.com/davidmagbee/portfolio-modern/blob/b36dcdcfebcf73ffbb2df91dcd637ac5b1662bac/pages/index.tsx), [contact UI](https://github.com/davidmagbee/portfolio-modern/blob/b36dcdcfebcf73ffbb2df91dcd637ac5b1662bac/app/components/Contact.tsx), [delivery route](https://github.com/davidmagbee/portfolio-modern/blob/b36dcdcfebcf73ffbb2df91dcd637ac5b1662bac/pages/api/contact.ts).

**Redirect policy:** temporary 307s are deliberate. Permanent 308s may be cached by browsers; the recorded old deployment does not contain the new `.jpg` destinations, so a cached permanent redirect could survive a rollback and lead to a missing image. Keep this rollback window free of permanent image migration rules. Permanent redirects can be considered later only if the owner chooses them.

**Legacy provider boundary:** old source names `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`, `CONTACT_SITE_ORIGIN`, `TURNSTILE_SECRET_KEY` and `NEXT_PUBLIC_TURNSTILE_SITE_KEY`. No environment value was inspected, decrypted, printed or copied for this plan. New portfolio code needs none of them. Leave existing provider/environment configuration intact while the old deployment remains the rollback target; do not copy secrets into source or disable providers during this release.

## Execution plan — only after owner approval

1. Refresh the project, Git connection, apex/`www` alias records and old deployment readiness. If any target differs from this snapshot, revise the plan before mutation. Record the approved final source SHA, old deployment ID/URL, domains and redirect state in release evidence.
2. Finish the local review before requesting approval: final typecheck/build, mobile/desktop and keyboard QA, equal-height cards across filters, notes dialog dismissal/focus return, approved résumé byte comparison, legacy fragment targets and assets. Platform verification remains pending because deployment is expressly deferred.
3. After approval, prevent automatic custom-domain reassignment before changing source connections. Keep the current production aliases on the old deployment. Connect the existing project to `davidmagbee/portfolio-dev`, production branch `main`; verify the connection rather than relying on local folder names. Reconfirm Node `24.x`, `nextjs`, repository root and default build/output detection. Do not change DNS, providers or secret values.
4. Use a clean checkout of the exact approved commit, linked explicitly to the existing project/team. Stage a production deployment without moving domains. Record the resulting immutable deployment ID, URL, Git SHA, target and `READY` state. Commands below are illustrative future actions, not actions already performed.

   ```sh
   vercel deploy --prod --skip-domain --scope davidmagbees-projects
   ```

5. Verify that exact staged production build: homepage and static chunks load; all project images and PDF/DOCX downloads have the expected bytes/types; both legacy image URLs respond 307 to the expected JPEG and that JPEG returns 200; old fragment links land correctly; filters, equal heights, notes/guide focus, theme persistence, email/scheduling links and mobile overflow work. Confirm no form claims delivery and no legacy secrets appear in generated assets. Do not send a message or book an appointment as part of smoke testing.
6. Promote the tested **staged production** deployment, using its recorded ID. Do not substitute a preview: Vercel documents that promoting a preview rebuilds it, whereas promoting a staged production deployment reuses the tested build. See [promotion behavior](https://vercel.com/docs/deployments/promoting-a-deployment).

   ```sh
   vercel promote APPROVED_STAGED_DEPLOYMENT_ID --scope davidmagbees-projects
   ```

7. Check `https://davidmagbee.com/` and `https://www.davidmagbee.com/` against the promoted deployment. Preserve `www` → apex 308, TLS, all compatibility paths and the new résumé URLs. Record actual status/alias evidence. Confirm Git integration now follows `portfolio-dev`, not the retired source repository.
8. Keep the old deployment, source commit and provider configuration available. Treat future automatic production deployments as a separate release-policy choice; promotion can restore auto-assignment, so inspect the returned project state. No old project/deployment/provider cleanup is included.

## Rollback after an approved cutover

**Same-project target:** `dpl_FmmiadpUwY4qjpwHQNJi93ADyVR9`, [immutable old deployment](https://portfolio-modern-l85oexfah-davidmagbees-projects.vercel.app/), source commit `b36dcdcfebcf73ffbb2df91dcd637ac5b1662bac`. Refresh this target if production changes before cutover. Verify retention, availability and rollback eligibility immediately before release; the account plan/retention policy was not established here.

If the promoted site fails acceptance, return production traffic to the recorded old deployment rather than rebuilding old source with changed settings:

```sh
vercel rollback dpl_FmmiadpUwY4qjpwHQNJi93ADyVR9 --scope davidmagbees-projects
```

This command has **not** been run. Then verify both domain aliases, the `www` redirect, old homepage, old image paths and contact form availability. A return of the old contact route does not prove inbox delivery. Preserve providers and deployment history so recovery does not depend on recreating credentials.

Vercel's [Instant Rollback documentation](https://vercel.com/docs/instant-rollback) says rollback returns domains to an existing deployment and disables automatic production-domain assignment. It does not revert the project's Git connection or rebuild environment variables. Leave traffic protected while diagnosing; explicitly reconcile the `portfolio-dev` connection and promotion policy before any later release. If the old source must resume future releases, restoring that Git connection is a separate deliberate configuration action.

**No new deployment, Git reconnection, domain/alias/DNS change, environment/provider mutation or Sites publication occurred while preparing this plan.**
