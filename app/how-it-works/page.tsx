import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheckIcon, WifiIcon, LockClosedIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'How WiFi QR Codes Work - Format & Security | WiFi QR Generator',
  description: 'Learn how WiFi QR codes work, the WIFI: string format, and supported security types including WPA, WPA2, WPA3, WEP, and open networks.',
};

export default function HowItWorksPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4 tracking-tight">
          How WiFi QR Codes Work
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl">
          WiFi QR codes encode network credentials in a standardized string format that iOS and Android can read and interpret.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">The WIFI: String Format</h2>
          <p className="text-gray-500 mb-4 text-sm leading-relaxed">
            WiFi QR codes use a standardized string format defined by the ZXing project. The format encodes all necessary network information in a simple, machine-readable string.
          </p>
          <div className="bg-gray-900 rounded-2xl p-5 font-mono text-xs overflow-x-auto">
            <p className="text-gray-500 mb-2">{`// WPA/WPA2/WPA3 Network`}</p>
            <p className="text-green-400">WIFI:T:WPA;S:MyNetwork;P:password123;H:false;;</p>
            <p className="text-gray-500 mt-4 mb-2">{`// Open Network (No Password)`}</p>
            <p className="text-green-400">WIFI:T:nopass;S:GuestNetwork;;</p>
            <p className="text-gray-500 mt-4 mb-2">{`// Hidden Network`}</p>
            <p className="text-green-400">WIFI:T:WPA;S:HiddenNetwork;P:secret;H:true;;</p>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Format Parameters</h2>
          <dl className="space-y-3">
            <div className="bg-white rounded-xl border border-gray-100 p-4">
              <dt className="font-medium text-gray-900 text-sm">T: (Type)</dt>
              <dd className="text-gray-500 mt-1 text-sm">Security type: WPA, WEP, or nopass</dd>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-4">
              <dt className="font-medium text-gray-900 text-sm">S: (SSID)</dt>
              <dd className="text-gray-500 mt-1 text-sm">Network name (escaped for special characters)</dd>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-4">
              <dt className="font-medium text-gray-900 text-sm">P: (Password)</dt>
              <dd className="text-gray-500 mt-1 text-sm">Network password (required for secured networks)</dd>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-4">
              <dt className="font-medium text-gray-900 text-sm">H: (Hidden)</dt>
              <dd className="text-gray-500 mt-1 text-sm">true/false - whether the SSID is hidden</dd>
            </div>
          </dl>
        </div>
      </div>

      <section className="mb-16">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Supported Security Types</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl border border-gray-100 p-5">
            <div className="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-4">
              <ShieldCheckIcon className="w-5 h-5" />
            </div>
            <h3 className="font-medium text-gray-900 mb-2">WPA/WPA2/WPA3</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              The most common security type for modern networks. WPA3 is the latest and most secure.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-5">
            <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-4">
              <LockClosedIcon className="w-5 h-5" />
            </div>
            <h3 className="font-medium text-gray-900 mb-2">WEP</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Older encryption standard with known vulnerabilities. Not recommended.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-5">
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
              <WifiIcon className="w-5 h-5" />
            </div>
            <h3 className="font-medium text-gray-900 mb-2">Open Network</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Networks without password protection. Users connect automatically.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Device Compatibility</h2>
        <p className="text-gray-500 mb-6 text-sm">
          WiFi QR codes are natively supported by most modern smartphones and tablets.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl border border-gray-100 p-5">
            <h3 className="font-medium text-gray-900 mb-2">iOS (iPhone/iPad)</h3>
            <p className="text-sm text-gray-500 mb-3 leading-relaxed">
              Built into the Camera app since iOS 11. Point your camera at the QR code and tap to connect.
            </p>
            <p className="text-sm text-green-600 font-medium">✓ iOS 11+</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-5">
            <h3 className="font-medium text-gray-900 mb-2">Android</h3>
            <p className="text-sm text-gray-500 mb-3 leading-relaxed">
              Supported by Camera app or Google Lens on most modern Android devices.
            </p>
            <p className="text-sm text-green-600 font-medium">✓ Android 5.0+</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Create Your WiFi QR Code</h2>
        <p className="text-gray-500 mb-6 text-sm">
          Ready to generate a WiFi QR code for your network? Our tool creates codes that work with all devices.
        </p>
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
