import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Scan WiFi QR Code on iPhone & Android | WiFi QR Generator',
  description: 'Learn how to scan a WiFi QR code to connect instantly. Step-by-step guide for iPhone (iOS) and Android devices.',
};

export default function ScanWifiQRCodePage() {
  return (
    <div className="py-8">
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          How to Scan WiFi QR Code
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Connect to WiFi instantly by scanning a QR code. No password needed. Works on iPhone and Android.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <section className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="bg-black text-white p-4 flex items-center gap-3">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <span className="font-semibold">iPhone (iOS)</span>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Scan with Camera App</h2>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium mr-4 flex-shrink-0">1</span>
                <div>
                  <p className="font-medium text-gray-900">Open Camera App</p>
                  <p className="text-sm text-gray-600 mt-1">Launch the built-in Camera app on your iPhone</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium mr-4 flex-shrink-0">2</span>
                <div>
                  <p className="font-medium text-gray-900">Point at QR Code</p>
                  <p className="text-sm text-gray-600 mt-1">Hold your phone so the QR code is visible in the camera frame</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium mr-4 flex-shrink-0">3</span>
                <div>
                  <p className="font-medium text-gray-900">Tap the Notification</p>
                  <p className="text-sm text-gray-600 mt-1">When a notification appears, tap &quot;Join Network&quot; to connect</p>
                </div>
              </li>
            </ol>
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-800">
                <strong>Tip:</strong> Works on iPhone 7 and newer running iOS 11 or later.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="bg-green-600 text-white p-4 flex items-center gap-3">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 20.5c0 1.1-1.11 2-2.5 2S3 21.6 3 20.5 4.11 17.5 5.5 17.5s2.5.9 2.5 2m11.5-4.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2M17.5 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2m4.5 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2M5.11 5.35c-.41-.25-.94-.2-1.27.14l-2.32 2.32c-.35.35-.4.89-.11 1.3l1.33 2.67c.18.36.55.56.94.56.18 0 .36-.04.53-.12l2.89-2.89c.34-.34.38-.88.09-1.3l-2.19-2.38z"/>
            </svg>
            <span className="font-semibold">Android</span>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Scan with Camera or Lens</h2>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-medium mr-4 flex-shrink-0">1</span>
                <div>
                  <p className="font-medium text-gray-900">Open Camera App</p>
                  <p className="text-sm text-gray-600 mt-1">Open your phone&apos;s built-in camera or Google Lens</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-medium mr-4 flex-shrink-0">2</span>
                <div>
                  <p className="font-medium text-gray-900">Point at QR Code</p>
                  <p className="text-sm text-gray-600 mt-1">Position the QR code within the camera&apos;s view</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-medium mr-4 flex-shrink-0">3</span>
                <div>
                  <p className="font-medium text-gray-900">Tap to Connect</p>
                  <p className="text-sm text-gray-600 mt-1">Tap the notification or the &quot;Connect&quot; button that appears</p>
                </div>
              </li>
            </ol>
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-800">
                <strong>Tip:</strong> On older Android phones, use a QR scanner app from Google Play.
              </p>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-gray-900 rounded-2xl p-8 text-white mb-16">
        <h2 className="text-2xl font-bold mb-6">Troubleshooting</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="font-semibold mb-3 text-red-400">QR Code Won&apos;t Scan?</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Ensure good lighting</li>
              <li>• Clean your camera lens</li>
              <li>• Hold phone 6-12 inches away</li>
              <li>• Make sure QR code isn&apos;t damaged</li>
            </ul>
          </div>
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="font-semibold mb-3 text-amber-400">Connection Failed?</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Verify network name and password</li>
              <li>• Check you selected correct security type</li>
              <li>• Ensure you&apos;re within WiFi range</li>
              <li>• Try forgetting and re-scanning</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Use WiFi QR Codes?</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Secure</h3>
            <p className="text-sm text-gray-600">No need to share your actual password with guests</p>
          </div>
          <div className="bg-green-50 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Instant</h3>
            <p className="text-sm text-gray-600">Connect in seconds with just one scan</p>
          </div>
          <div className="bg-purple-50 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Convenient</h3>
            <p className="text-sm text-gray-600">No typing errors or forgotten passwords</p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Create a WiFi QR Code</h2>
        <p className="text-gray-600 mb-6">Generate a shareable QR code for your WiFi network</p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          Generate WiFi QR Code
        </Link>
      </section>
    </div>
  );
}
