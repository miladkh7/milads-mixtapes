export type PlaylistId = 'office' | 'after-hours' | 'deep-focus';
export type Contributor = { id: string; displayName: string; profileUrl?: string };
export type SongSuggestion = { songUrl: string; playlistId: PlaylistId | 'just-for-milad'; name?: string; privateNote?: string; contributorId?: string };
export const playlists = [
 { id: 'office', number: '01', title: 'The Shared AUX', mood: 'GOOD COMPANY, GOOD MUSIC', description: 'For the desk next door, the afternoon coffee, and everyone who says “what song is this?”', note: 'A little soundtrack for our everyday.', theme: 'olive', label: 'Made for the room', url: process.env.NEXT_PUBLIC_SPOTIFY_OFFICE_URL || '' },
 { id: 'after-hours', number: '02', title: 'After Hours', mood: 'WHEN THE WORLD GETS QUIET', description: 'Soft edges, slow evenings, and songs that feel a little different after midnight.', note: 'For the long way home.', theme: 'night', label: 'Made for the night', url: process.env.NEXT_PUBLIC_SPOTIFY_AFTER_HOURS_URL || '' },
 { id: 'deep-focus', number: '03', title: 'Deep Focus', mood: 'A LITTLE SPACE TO THINK', description: 'Less noise. More room. A steady companion for getting lost in whatever you’re making.', note: 'Find your own frequency.', theme: 'focus', label: 'Made for your flow', url: process.env.NEXT_PUBLIC_SPOTIFY_DEEP_FOCUS_URL || '' },
] as const;
export type Playlist = (typeof playlists)[number];
export function spotifyLinks(value: string) {
 try { const u = new URL(value); const m = u.pathname.match(/^\/(?:embed\/)?playlist\/([A-Za-z0-9]+)\/?$/); if (u.protocol !== 'https:' || u.hostname !== 'open.spotify.com' || !m) return null; return { open: `https://open.spotify.com/playlist/${m[1]}`, embed: `https://open.spotify.com/embed/playlist/${m[1]}?utm_source=generator` }; } catch { return null; }
}
