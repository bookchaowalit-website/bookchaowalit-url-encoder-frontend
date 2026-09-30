# Upgrade plan

## Current state

Score: 7/10 (was 6/10) — the utility already worked; codec is now tested, handles form-encoded +, supports swap, and stale output no longer survives a mode change.

## Backlog

- P1: Query-string inspector (split a URL into decoded key/value rows).
- P1: Live conversion as you type (with a toggle).
- P2: Playwright smoke test for convert/copy/swap.
- P2: Correct `public/sitemap.xml` host.

## Done in this pass

- CI (`.github/workflows/ci.yml`): `npm ci`, lint, typecheck, vitest, `next build` on every push and PR.
- `/api/mcp` uses a typed JSON-RPC handler (`lib/mcp.ts`, tested) with proper error codes and an honest `get_app_info` tool; this fixed the template's lint errors.
- `/more-projects` renders from `lib/related-projects.ts` (was ~980 lines of unrolled links plus an unused data copy) and no longer links to itself; removed the stale `app/page.tsx.backup`.
- Codec moved to `lib/codec.ts` (tested, incl. round-trips and malformed input).
- Added "treat + as space" for decoding, a swap-and-reverse action, output cleared when the mode changes (it previously showed the old mode's result), `aria-pressed` mode buttons and an announced copy status.
