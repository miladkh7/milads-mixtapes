'use client';

import { useRef, useState } from 'react';
import { playlists, type PlaylistId } from '@/lib/playlists';
import { suggestionCopy, type SuggestionDestination } from '@/lib/office';

export function Suggestion({ destination = 'after-hours', placement = 'floating' }: {
  destination?: PlaylistId;
  placement?: 'floating' | 'rail';
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [playlist, setPlaylist] = useState<SuggestionDestination>(destination);
  const copy = destination === 'office' ? suggestionCopy.office : suggestionCopy.personal;

  return (
    <>
      <button className={`suggestion-card ${placement === 'rail' ? 'suggestion-card-rail' : ''}`} onClick={() => dialog.current?.showModal()} aria-haspopup="dialog">
        <span className="suggestion-heart" aria-hidden="true">♡</span>
        <span className="suggestion-card-copy"><strong>{copy.heading}</strong><small>{copy.supporting}</small><span className="suggestion-cta">{suggestionCopy.cta} <span aria-hidden="true">↗</span></span></span>
      </button>
      <dialog ref={dialog} className="suggestion-dialog" aria-labelledby="suggestion-title" onClick={e => { if (e.target === dialog.current) dialog.current.close(); }}>
        <div className="dialog-heading"><span className="eyebrow">PASS A LITTLE MUSIC ON</span><button aria-label="Close suggestion" onClick={() => dialog.current?.close()}>×</button></div>
        <h2 id="suggestion-title">A song worth sharing.</h2>
        <p id="suggestion-status">Suggestions are coming soon. Explore the form, but nothing is sent or saved yet.</p>
        <form onSubmit={e => e.preventDefault()} aria-describedby="suggestion-status">
          <label>Song URL<input type="url" name="songUrl" placeholder="https://open.spotify.com/track/…" required /></label>
          <label>For which mixtape?<select value={playlist} onChange={e => setPlaylist(e.target.value as SuggestionDestination)} name="playlistId" required>{playlists.map(p => <option key={p.id} value={p.id}>{p.title}</option>)}<option value="just-for-milad">Just for Milad</option></select></label>
          <label>Your name <span>(optional)</span><input name="name" autoComplete="given-name" maxLength={80} placeholder="A name to put to the good taste" /></label>
          <label>A private note <span>(optional)</span><textarea name="privateNote" maxLength={1000} placeholder="Why this one?" rows={3} /></label>
          <p className="form-note">This preview stays in this window. When suggestions open, private notes will be visible only to Milad.</p>
          <button className="submit-button" disabled>Suggestions open soon ♡</button>
        </form>
      </dialog>
    </>
  );
}
