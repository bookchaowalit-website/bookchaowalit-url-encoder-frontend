# Upgrade plan

## Current state

Score: 7/10 (was 6/10) — the utility already worked; codec is now tested, handles form-encoded +, supports swap, and stale output no longer survives a mode change.

## Backlog

- P1: Live conversion as you type (with a toggle).
- P2: Playwright smoke test for convert/copy/swap.

## Done in this pass

- CI (`.github/workflows/ci.yml`): `npm ci`, lint, typecheck, vitest, `next build` on every push and PR.
- `/api/mcp` uses a typed JSON-RPC handler (`lib/mcp.ts`, tested) with proper error codes and an honest `get_app_info` tool; this fixed the template's lint errors.
- `/more-projects` renders from `lib/related-projects.ts` (was ~980 lines of unrolled links plus an unused data copy) and no longer links to itself; removed the stale `app/page.tsx.backup`.
- Codec moved to `lib/codec.ts` (tested, incl. round-trips and malformed input).
- Added "treat + as space" for decoding, a swap-and-reverse action, output cleared when the mode changes (it previously showed the old mode's result), `aria-pressed` mode buttons and an announced copy status.

## Done in this pass (pass 2)

- Canonical host is config-driven: `lib/site.ts` resolves `NEXT_PUBLIC_SITE_URL` (validated, clear error on a non-http(s) value) and feeds `metadataBase`, generated `app/sitemap.ts` / `app/robots.ts` and the MCP `get_app_info` URL; removed the stale template `public/sitemap.xml` / `robots.txt` (they pointed at `bookchaowalit.com` and a `*.vercel.app` name that differs from the project URL). Tested in `lib/site.test.ts`.
- Query-string inspector: "Inspect query string" splits a full URL or bare query into decoded key/value rows (`inspectQuery` in `lib/codec.ts`, URLSearchParams rules: `+` is a space, repeats kept, fragment ignored) with a clear message when there is no query. Tested.
