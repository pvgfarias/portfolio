import type { Metadata } from 'next';
import { Ubuntu_Sans, Ubuntu_Mono } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const ubuntuSans = Ubuntu_Sans({
  variable: '--font-ubuntu-sans',
  subsets: ['latin'],
});

const ubuntuMono = Ubuntu_Mono({
  variable: '--font-ubuntu-mono',
  subsets: ['latin'],
  weight: '700',
});

export const metadata: Metadata = {
  title: 'Paulo Farias | Portfolio',
  description: 'Portfolio for Full Stack Web Developer @pvgfarias',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ubuntuSans.variable} ${ubuntuMono.variable} antialiased`}>
      <body>
        <Navbar />
        <div className="min-h-screen bg-white-50 dark:bg-slate-950">
          <main className="relative">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
