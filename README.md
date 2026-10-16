# Abrany — First Personal Brain Trainer

Single-page Next.js 15 / React 19 / TypeScript site. Two separately drawn Figma-coordinate hero artboards (1440×810 and 440×956) use one calculated CSS design-pixel unit. All imagery and video load from the configured Cloudflare R2 CDN; no local asset folder is required.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000. For production use `npm run build && npm run start`.

To override the asset origin, set `NEXT_PUBLIC_ASSET_BASE` (no trailing slash required) in `.env.local`.

The sample product is fictional. Newsletter subscription validates locally and shows confirmation; it does not submit data to a server. Pricing CTAs scroll to the contact footer rather than initiating checkout.

The default film is muted and loops without scroll seeking. Desktop 01/02 controls switch between the anatomical still and the film. Reduced-motion preferences disable Lenis, magnetic reactions, velocity marquees and scroll parallax.
