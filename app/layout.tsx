import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  verification: {
    // Add your verification codes here after setup
    // google: 'your-google-verification-code',
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-full flex flex-col bg-gray-50 text-gray-900`}
      >
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
                </svg>
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900">WiFi QR</span>
            </div>
            <nav className="hidden sm:flex gap-6">
              <a href="/how-it-works" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">How it works</a>
              <a href="/scan-wifi-qr-code" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Scan Guide</a>
              <a href="/printable" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Templates</a>
            </nav>
          </div>
        </header>

        <main className="flex-grow w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>

        <footer className="bg-white border-t border-gray-200 mt-auto">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500">
                © 2025 WiFi QR Code Generator. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="/privacy" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Privacy Policy</a>
                <a href="/terms" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
