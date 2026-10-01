# URL Encoder / Decoder

Percent-encode and decode URL text safely in the browser.

## Features
- encodeURIComponent / decodeURIComponent
- encodeURI / decodeURI modes
- Optional "treat + as space" when decoding form-encoded query strings
- Swap output back into the input with the reverse mode
- Copy result; malformed percent-encoding is reported, not thrown
- Query-string inspector: split a URL or query string into decoded key/value rows

## Limitations
- Follows JavaScript URI encoding rules

## Run
```bash
npm install
npm run dev
```

## Stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- Fully client-side (no API keys)

## Honesty notes
- Portfolio developer utility showcase
- Not a multi-tenant SaaS product

## Checks

```bash
npm ci
npm run lint
npm run typecheck
npm test
npm run build
```

CI runs the same checks on every push (`.github/workflows/ci.yml`).

## Configuration

- `NEXT_PUBLIC_SITE_URL` (optional): canonical origin used for metadata, `/sitemap.xml`, `/robots.txt` and the MCP app info. Defaults to `https://bookchaowalit-url-encoder-frontend.vercel.app`; must be an absolute http(s) URL.
