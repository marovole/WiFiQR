import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheckIcon, WifiIcon, LockClosedIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'How WiFi QR Codes Work - Format & Security | WiFi QR Generator',
  description: 'Learn how WiFi QR codes work, the WIFI: string format, and supported security types including WPA, WPA2, WPA3, WEP, and open networks.',
};

export default function HowItWorksPage() {
  return (
    <div className="py-8">
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          How WiFi QR Codes Work
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          WiFi QR codes encode network credentials in a standardized string format that iOS and Android can read and interpret.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The WIFI: String Format</h2>
          <p className="text-gray-600 mb-4">
            WiFi QR codes use a standardized string format defined by the ZXing project. The format encodes all necessary network information in a simple, machine-readable string.
          </p>
          <div className="bg-gray-900 rounded-xl p-6 font-mono text-sm overflow-x-auto">
            <p className="text-green-400 mb-2">{`// WPA/WPA2/WPA3 Network`}</p>
            <p className="text-white">WIFI:T:WPA;S:MyNetwork;P:password123;H:false;;</p>
            <p className="text-gray-500 mt-4 mb-2">{`// Open Network (No Password)`}</p>
            <p className="text-white">WIFI:T:nopass;S:GuestNetwork;;</p>
            <p className="text-gray-500 mt-4 mb-2">{`// Hidden Network`}</p>
            <p className="text-white">WIFI:T:WPA;S:HiddenNetwork;P:secret;H:true;;</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Format Parameters</h2>
          <dl className="space-y-4">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <dt className="font-medium text-gray-900">T: (Type)</dt>
              <dd className="text-gray-600 mt-1">Security type: WPA, WEP, or nopass</dd>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <dt className="font-medium text-gray-900">S: (SSID)</dt>
              <dd className="text-gray-600 mt-1">Network name (escaped for special characters)</dd>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <dt className="font-medium text-gray-900">P: (Password)</dt>
              <dd className="text-gray-600 mt-1">Network password (required for secured networks)</dd>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <dt className="font-medium text-gray-900">H: (Hidden)</dt>
              <dd className="text-gray-600 mt-1">true/false - whether the SSID is hidden</dd>
            </div>
          </dl>
        </div>
      </div>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Supported Security Types</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
              <ShieldCheckIcon className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">WPA/WPA2/WPA3</h3>
            <p className="text-sm text-gray-600">
              The most common security type for modern networks. WPA3 is the latest and most secure, with WPA2 providing broad compatibility.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center mb-4">
              <LockClosedIcon className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">WEP</h3>
            <p className="text-sm text-gray-600">
              Older encryption standard with known vulnerabilities. Still supported for legacy devices but not recommended.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
              <WifiIcon className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Open Network (nopass)</h3>
            <p className="text-sm text-gray-600">
              Networks without password protection. The QR code only contains the network name, and users connect automatically.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Device Compatibility</h2>
        <p className="text-gray-600 mb-6">
          WiFi QR codes are natively supported by most modern smartphones and tablets.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-3">iOS (iPhone/iPad)</h3>
            <p className="text-sm text-gray-600 mb-3">
              Built into the Camera app since iOS 11. Simply point your camera at the QR code and tap the notification to connect.
            </p>
            <p className="text-sm text-green-600 font-medium">✓ iOS 11+</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Android</h3>
            <p className="text-sm text-gray-600 mb-3">
              Supported by Camera app or Google Lens on most modern Android devices. QR code scanning is built into system camera.
            </p>
            <p className="text-sm text-green-600 font-medium">✓ Android 5.0+</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Create Your WiFi QR Code</h2>
        <p className="text-gray-600 mb-6">
          Ready to generate a WiFi QR code for your network? Our tool creates codes that work with all devices.
        </p>
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
