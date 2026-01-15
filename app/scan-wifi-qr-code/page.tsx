import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Scan WiFi QR Code on iPhone & Android | WiFi QR Generator',
  description: 'Learn how to scan a WiFi QR code to connect instantly. Step-by-step guide for iPhone (iOS) and Android devices.',
};

export default function ScanWifiQRCodePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4 tracking-tight">
          How to Scan WiFi QR Code
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl">
          Connect to WiFi instantly by scanning a QR code. No password needed. Works on iPhone and Android.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <section className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="bg-gray-900 text-white p-4 flex items-center gap-3">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <span className="font-medium text-sm">iPhone (iOS)</span>
          </div>
          <div className="p-5">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Scan with Camera App</h2>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="w-7 h-7 bg-gray-100 text-gray-700 rounded-full flex items-center justify-center text-xs font-medium mr-3 flex-shrink-0">1</span>
                <div>
                  <p className="font-medium text-gray-900 text-sm">Open Camera App</p>
                  <p className="text-sm text-gray-500 mt-0.5">Launch the built-in Camera app</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-7 h-7 bg-gray-100 text-gray-700 rounded-full flex items-center justify-center text-xs font-medium mr-3 flex-shrink-0">2</span>
                <div>
                  <p className="font-medium text-gray-900 text-sm">Point at QR Code</p>
                  <p className="text-sm text-gray-500 mt-0.5">Hold your phone so the QR code is visible</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-7 h-7 bg-gray-100 text-gray-700 rounded-full flex items-center justify-center text-xs font-medium mr-3 flex-shrink-0">3</span>
                <div>
                  <p className="font-medium text-gray-900 text-sm">Tap the Notification</p>
                  <p className="text-sm text-gray-500 mt-0.5">Tap &quot;Join Network&quot; to connect</p>
                </div>
              </li>
            </ol>
            <div className="mt-5 p-3 bg-gray-50 rounded-xl">
              <p className="text-xs text-gray-600">
                <strong>Tip:</strong> Works on iOS 11 or later.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="bg-green-600 text-white p-4 flex items-center gap-3">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.523 2c1.26 0 2.29 1.08 2.29 2.39v15.22c0 1.31-1.03 2.39-2.29 2.39H6.477c-1.26 0-2.29-1.08-2.29-2.39V4.39C4.187 3.08 5.217 2 6.477 2h11.046zM12 18.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/>
            </svg>
            <span className="font-medium text-sm">Android</span>
          </div>
          <div className="p-5">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Scan with Camera or Lens</h2>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="w-7 h-7 bg-green-50 text-green-700 rounded-full flex items-center justify-center text-xs font-medium mr-3 flex-shrink-0">1</span>
                <div>
                  <p className="font-medium text-gray-900 text-sm">Open Camera App</p>
                  <p className="text-sm text-gray-500 mt-0.5">Open camera or Google Lens</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-7 h-7 bg-green-50 text-green-700 rounded-full flex items-center justify-center text-xs font-medium mr-3 flex-shrink-0">2</span>
                <div>
                  <p className="font-medium text-gray-900 text-sm">Point at QR Code</p>
                  <p className="text-sm text-gray-500 mt-0.5">Position the QR code in view</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-7 h-7 bg-green-50 text-green-700 rounded-full flex items-center justify-center text-xs font-medium mr-3 flex-shrink-0">3</span>
                <div>
                  <p className="font-medium text-gray-900 text-sm">Tap to Connect</p>
                  <p className="text-sm text-gray-500 mt-0.5">Tap the &quot;Connect&quot; button</p>
                </div>
              </li>
            </ol>
            <div className="mt-5 p-3 bg-green-50 rounded-xl">
              <p className="text-xs text-green-700">
                <strong>Tip:</strong> On older phones, use a QR scanner app.
              </p>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-gray-900 rounded-2xl p-6 md:p-8 text-white mb-16">
        <h2 className="text-xl font-semibold mb-6">Troubleshooting</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-800 rounded-xl p-5">
            <h3 className="font-medium mb-3 text-red-400 text-sm">QR Code Won&apos;t Scan?</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• Ensure good lighting</li>
              <li>• Clean your camera lens</li>
              <li>• Hold phone 6-12 inches away</li>
              <li>• Make sure QR code isn&apos;t damaged</li>
            </ul>
          </div>
          <div className="bg-gray-800 rounded-xl p-5">
            <h3 className="font-medium mb-3 text-amber-400 text-sm">Connection Failed?</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• Verify network name and password</li>
              <li>• Check correct security type</li>
              <li>• Ensure you&apos;re within WiFi range</li>
              <li>• Try forgetting and re-scanning</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Why Use WiFi QR Codes?</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="bg-gray-50 rounded-2xl p-5 text-center">
            <div className="w-10 h-10 bg-gray-900 text-white rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="font-medium text-gray-900 mb-1">Secure</h3>
            <p className="text-sm text-gray-500">No need to share your password</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-5 text-center">
            <div className="w-10 h-10 bg-gray-900 text-white rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-medium text-gray-900 mb-1">Instant</h3>
            <p className="text-sm text-gray-500">Connect in seconds</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-5 text-center">
            <div className="w-10 h-10 bg-gray-900 text-white rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-medium text-gray-900 mb-1">Convenient</h3>
            <p className="text-sm text-gray-500">No typing errors</p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Create a WiFi QR Code</h2>
        <p className="text-gray-500 mb-6 text-sm">Generate a shareable QR code for your WiFi network</p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 transition-colors"
        >
          Generate WiFi QR Code
        </Link>
      </section>
    </div>
  );
}
