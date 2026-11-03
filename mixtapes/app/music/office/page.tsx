import type { Metadata } from 'next';
import Link from 'next/link';
import { playlists } from '@/lib/playlists';
import { officeContent } from '@/lib/office';
import { Sleeve } from '@/components/sleeve';
import { SpotifyPlayer } from '@/components/spotify-player';
import { Suggestion } from '@/components/suggestion';

const office = playlists[0];
export const metadata: Metadata = {
  title: `${office.title} — Milad’s Mixtapes`,
  description: officeContent.introduction,
};

export default function OfficePage() {
  return (
    <main id="main" className="office-page">
      <Link href="/music" className="back-link">← The collection</Link>
      <div className="office-grid">
        <div className="office-artwork">
          <Sleeve playlist={office} />
          <p className="cover-footnote">A MIXTAPE BY MILAD <span>VOL. {office.number}</span></p>
        </div>
        <div className="office-introduction">
          <p className="eyebrow">{officeContent.welcome}</p>
          <h1>{office.title}</h1>
          <p className="detail-description">{officeContent.introduction}</p>
          <p className="detail-note">{officeContent.note}</p>
          <SpotifyPlayer url={office.url} title={office.title} />
          <p className="aux-note">{officeContent.wallNote}</p>
        </div>
        <aside className="office-suggestion-rail" aria-label="Share a song">
          <Suggestion destination="office" placement="rail" />
        </aside>
      </div>
      <nav className="more-mixtapes office-cross-navigation" aria-label="Upcoming mixtapes">
        <p className="eyebrow">{officeContent.browseLabel}</p>
        <ul>{playlists.filter(p => p.id !== 'office').map(p => (
          <li key={p.id}><span>{p.number} /</span><span>{p.title}</span><small>Coming later</small></li>
        ))}</ul>
      </nav>
    </main>
  );
}
