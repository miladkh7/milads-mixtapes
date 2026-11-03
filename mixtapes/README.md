# Milad’s Mixtapes

Frontend-only Next.js App Router, TypeScript, Tailwind CSS release. No database, authentication, or submission endpoint.

## Preview

Requires Node.js 20.9 or newer.

```sh
npm install
npm run dev
```

Open http://localhost:3000/music. The root redirects to the collection. Playlist routes: `/music/office`, `/music/after-hours`, `/music/deep-focus`.

## Spotify configuration

Copy `.env.example` to `.env.local` and set each variable to a public Spotify playlist URL (`https://open.spotify.com/playlist/PLAYLIST_ID`). Standard and embed playlist URLs are accepted; other hosts and resource types are rejected. Restart the development server after changing variables. Missing or invalid URLs show the intentional coming-soon player. No demo playlists are substituted. Spotify playback availability depends on Spotify, the playlist’s visibility, and the listener’s account/browser.

Playlist text and theme data live in `lib/playlists.ts`. Site tokens, responsive layouts, and sleeve art live in `app/globals.css`. Artwork is local CSS with no image or font network dependencies.

## Quality checks

```sh
npm run lint
npm run build
npm start
```

## Vercel

Push this `mixtapes` directory to a Git repository and import it in Vercel. If importing the parent workspace, set **Root Directory** to `mixtapes`. Use the detected Next.js preset, default build command `npm run build`, and default output settings. Add the three `NEXT_PUBLIC_SPOTIFY_*_URL` variables in Project Settings → Environment Variables before deploying. These URLs are public configuration, not secrets. Redeploy after changing them.

Point the physical office QR code to `https://YOUR-DOMAIN/music/office` after deployment. That route is the permanent office landing page.

## Suggestions and future integration

The accessible native dialog previews song URL, destination, optional name, and private note. Submission is disabled; there is no fetch, simulated success, or persistent storage. Typed `SongSuggestion` and `Contributor` contracts provide an integration seam. Future work can connect a server-side adapter to Django or another API, validate and rate-limit on the server, and define contributor consent and private-note access before enabling submission. No contributor identities or counts are fabricated.

## Current office review

The dedicated `/music/office` implementation is provisional and awaiting visual approval. See [desktop/mobile captures and reference comparison](../docs/review/README.md). Office cross-navigation remains a placeholder; the other page designs predate this review branch. The compact office suggestion card uses a desktop sticky rail and follows the player on mobile so it cannot obscure playback.
