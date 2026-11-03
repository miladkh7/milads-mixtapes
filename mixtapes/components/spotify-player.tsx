import { spotifyLinks } from '@/lib/playlists';
import { officeContent } from '@/lib/office';

export function SpotifyPlayer({ url, title }: { url: string; title: string }) {
  const spotify = spotifyLinks(url);
  return (
    <section aria-label={`Listen to ${title}`} className="office-player">
      <p className="listening-label"><span className="status-dot" aria-hidden="true" />{officeContent.listeningLabel}</p>
      {spotify ? (
        <>
          <iframe className="spotify-embed" title={`Listen to ${title} on Spotify`} src={spotify.embed} width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
          <a className="spotify-link" href={spotify.open} target="_blank" rel="noopener noreferrer">Open in Spotify <span aria-hidden="true">↗</span></a>
          <p className="office-player-help">If the player doesn’t load, open the playlist directly in Spotify.</p>
        </>
      ) : (
        <div className="empty-player">
          <span aria-hidden="true">♫</span>
          <h2>{officeContent.emptyTitle}</h2>
          <p>{officeContent.emptyDescription}</p>
          <span className="coming-soon">PLAYLIST COMING SOON</span>
        </div>
      )}
    </section>
  );
}
