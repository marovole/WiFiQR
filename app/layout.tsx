import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Create WiFi QR Code Generator (Free, Printable)',
  description: 'Generate a free WiFi QR code instantly. No signup required. Download PNG, SVG or print a WiFi sign for your home, cafe, Airbnb, or office.',
  keywords: ['create wifi qr code', 'wifi qr code generator', 'generate wifi qr code', 'free wifi qr code', 'printable wifi qr code'],
  authors: [{ name: 'WiFi QR Generator' }],
  metadataBase: new URL('https://wifi-qr-code.online'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Create WiFi QR Code Generator',
    description: 'Free WiFi QR code generator. Download or print instantly.',
    type: 'website',
    locale: 'en_US',
    siteName: 'WiFi QR Code Generator',
    url: 'https://wifi-qr-code.online',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'WiFi QR Code Generator - Create Free WiFi QR Codes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Create WiFi QR Code Generator',
    description: 'Free WiFi QR code generator. Download or print instantly.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-full flex flex-col bg-[#FAFAFA] text-gray-900`}
      >
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 bg-gray-900 rounded-xl flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
                </svg>
              </div>
              <span className="font-semibold text-lg tracking-tight text-gray-900">WiFi QR</span>
            </Link>
            <nav className="hidden sm:flex items-center gap-1">
              <a href="/how-it-works" className="px-4 py-2 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200">How it works</a>
              <a href="/scan-wifi-qr-code" className="px-4 py-2 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200">Scan Guide</a>
              <a href="/printable" className="px-4 py-2 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200">Templates</a>
            </nav>
          </div>
        </header>

        <main className="flex-grow w-full pt-16">
          {children}
        </main>

        <footer className="bg-white border-t border-gray-100 mt-auto">
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-400">
                © 2026 WiFi QR Code Generator
              </p>
              <div className="flex gap-6">
                <a href="/privacy" className="text-sm text-gray-400 hover:text-gray-900 transition-colors duration-200">Privacy</a>
                <a href="/terms" className="text-sm text-gray-400 hover:text-gray-900 transition-colors duration-200">Terms</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
