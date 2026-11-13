import type { Metadata } from 'next';
import '@fontsource-variable/manrope';
import '@fontsource/ibm-plex-mono/400.css';
import '@fontsource/ibm-plex-mono/500.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'David Magbee — Software Engineer',
  description:
    'Full-stack product engineering, system architecture, and a direction toward AI engineering. Explore David Magbee’s work, experience, and current projects.',
  openGraph: {
    title: 'David Magbee — Software Engineer',
    description: 'Useful products. Thoughtful systems. Explore my work and what I’m building next.',
    type: 'website',
  },
};

/** Resolve the visitor's stored or system theme before paint; storage may be disabled. */
const themeScript = `try{const t=localStorage.getItem('portfolio-theme');document.documentElement.dataset.theme=t==='light'||t==='dark'?t:matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}catch{document.documentElement.dataset.theme=matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
