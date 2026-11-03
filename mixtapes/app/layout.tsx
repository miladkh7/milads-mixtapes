import type { Metadata } from 'next';
import { Navigation, Footer } from '@/components/site';
import './globals.css';
export const metadata: Metadata = { title: 'Milad’s Mixtapes — A little music from me, a little from you.', description: 'A personal collection of handpicked playlists. Music for good company, quiet nights, and a little space to think.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><a href="#main" className="skip-link">Skip to content</a><div className="site-shell"><Navigation/>{children}<Footer/></div></body></html>; }
