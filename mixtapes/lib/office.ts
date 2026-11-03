import type { PlaylistId } from './playlists';

export type SuggestionDestination = PlaylistId | 'just-for-milad';
export const suggestionCopy = {
  office: { heading: 'Got a song for us? ♡', supporting: 'This is our playlist, after all.' },
  personal: { heading: 'Got a song for me? ♡', supporting: "I'd love to hear what you've been listening to." },
  cta: 'Send me a song',
} as const;

export const officeContent = {
  welcome: 'A LITTLE MUSIC FROM ME, A LITTLE FROM YOU.',
  introduction: 'For the desk next door, the afternoon coffee, and everyone who says “what song is this?”',
  note: 'One room. Many tastes. A shared AUX.',
  wallNote: 'Found us on the wall? You’re in the right place. Make yourself at home.',
  listeningLabel: 'THE SOUNDTRACK TO OUR EVERYDAY',
  emptyTitle: 'The sleeve is ready. The music is on its way.',
  emptyDescription: 'Milad is putting this mixtape together. Come back for a little something good.',
  browseLabel: 'MORE MIXTAPES, IN GOOD TIME',
} as const;
