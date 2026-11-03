'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export function Navigation() { const path = usePathname(); return <header className="site-header"><Link href="/music" className="wordmark"><span className="brand-icon" aria-hidden="true">m♪</span>Milad’s Mixtapes<span className="brand-dot">●</span></Link><nav aria-label="Main navigation"><Link href="/music" aria-current={path === '/music' ? 'page' : undefined}>The collection</Link><Link href="/music#about">A note from Milad ↗</Link></nav></header>; }
export function Footer() { return <footer><span>Curated with feeling. Shared with love.</span><Link href="/music">Milad’s Mixtapes ♡</Link><span>A little music goes a long way.</span></footer>; }

