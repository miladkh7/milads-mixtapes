# Milad's Mixtapes — Product Brief

## Vision
A warm, personal, minimal website for sharing curated music playlists. Tagline: **“A little music from me, a little from you.”** The first public release should be genuinely usable and deployed quickly, then improved incrementally.

## Audience and primary journey
A colleague scans a physical wall QR code, opens `/music/office`, discovers The Shared AUX, listens through the Spotify embed, and eventually suggests a song. Visitors can also browse other playlists via `/music`.

## Routes
- `/music`: overview of all playlists; cards with distinct identities and global song-suggestion entry point.
- `/music/office`: **The Shared AUX**; flagship shared office playlist, olive theme, destination of wall QR.
- `/music/after-hours`: after-hours playlist, own visual personality.
- `/music/deep-focus`: focus playlist, own visual personality.

Every playlist page includes: title, short personality-driven introduction, Spotify embed, navigation to other playlists, and a compact song-suggestion floating card.

## Song suggestion product behavior (future release)
Global form: required song URL; required destination playlist including **Just for Milad**; optional name and private note. Suggestions are reviewed manually and never auto-added to Spotify. The office page uses copy **“Got a song for us? ♡”** and **“This is our playlist, after all.”** Other pages use **“Got a song for me? ♡”** and **“I'd love to hear what you've been listening to.”** CTA: **“Send me a song”**.

Do not display a successful submission message until a real submission destination exists. In V1, show a clearly marked coming-soon state or connect a real external form only after it is configured.

## Contributor concept (future)
Potentially show contributors and their accepted suggestions, with optional profiles later. No account/login requirement in V1. Data model and backend decision deferred until needed.

## Release sequence
1. V1: responsive frontend and Spotify embeds, deployed publicly; no database.
2. V1.1: real song suggestion intake (potentially Google Forms/Sheets or another endpoint).
3. V2: contributor management, moderation, persistence (evaluate Django vs managed database then).

## Open inputs
- Final Spotify playlist URLs/IDs.
- Final screenshots of approved designs (desktop/mobile).
- Permanent domain/URL before printing the wall QR sticker.
- Final copy/imagery for each playlist.
