import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheckIcon, WifiIcon, LockClosedIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'How WiFi QR Codes Work - Format & Security | WiFi QR Generator',
  description: 'Learn how WiFi QR codes work, the WIFI: string format, and supported security types including WPA, WPA2, WPA3, WEP, and open networks.',
};

export default function HowItWorksPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-30 -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-br from-violet-200 to-purple-200 rounded-full blur-3xl opacity-25 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full blur-3xl opacity-20" />

      <div className="relative max-w-5xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Technical Guide
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
            How WiFi QR Codes
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Actually Work</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            WiFi QR codes encode network credentials in a standardized string format that iOS and Android can read and interpret automatically.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* WIFI String Format */}
          <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900">The WIFI: String Format</h2>
            </div>
            <p className="text-gray-500 mb-5 text-sm leading-relaxed">
              WiFi QR codes use a standardized string format defined by the ZXing project. The format encodes all necessary network information in a simple, machine-readable string.
            </p>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-5 font-mono text-xs overflow-x-auto relative">
              <div className="absolute top-3 right-3 flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>
              <p className="text-gray-500 mb-2">{`// WPA/WPA2/WPA3 Network`}</p>
              <p className="text-emerald-400">WIFI:T:WPA;S:MyNetwork;P:password123;H:false;;</p>
              <p className="text-gray-500 mt-4 mb-2">{`// Open Network (No Password)`}</p>
              <p className="text-cyan-400">WIFI:T:nopass;S:GuestNetwork;;</p>
              <p className="text-gray-500 mt-4 mb-2">{`// Hidden Network`}</p>
              <p className="text-violet-400">WIFI:T:WPA;S:HiddenNetwork;P:secret;H:true;;</p>
            </div>
          </div>

          {/* Format Parameters */}
          <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/20">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900">Format Parameters</h2>
            </div>
            <div className="space-y-3">
              {[
                { param: 'T:', label: 'Type', desc: 'Security type: WPA, WEP, or nopass', color: 'from-emerald-500 to-teal-500' },
                { param: 'S:', label: 'SSID', desc: 'Network name (escaped for special characters)', color: 'from-blue-500 to-cyan-500' },
                { param: 'P:', label: 'Password', desc: 'Network password (required for secured networks)', color: 'from-violet-500 to-purple-500' },
                { param: 'H:', label: 'Hidden', desc: 'true/false - whether the SSID is hidden', color: 'from-amber-500 to-orange-500' },
              ].map((item) => (
                <div key={item.param} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white text-xs font-bold font-mono">{item.param}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{item.label}</p>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security Types */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Supported Security Types</h2>
            <p className="text-gray-500">Choose the right security level for your network</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="group relative bg-white rounded-3xl border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-100 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-emerald-500/20">
                  <ShieldCheckIcon className="w-7 h-7 text-white" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full mb-3">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                  Recommended
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">WPA/WPA2/WPA3</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  The most common security type for modern networks. WPA3 is the latest and most secure standard available.
                </p>
              </div>
            </div>

            <div className="group relative bg-white rounded-3xl border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-100 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-amber-500/20">
                  <LockClosedIcon className="w-7 h-7 text-white" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full mb-3">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                  Legacy
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">WEP</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Older encryption standard with known vulnerabilities. Not recommended for security-sensitive environments.
                </p>
              </div>
            </div>

            <div className="group relative bg-white rounded-3xl border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-blue-500/20">
                  <WifiIcon className="w-7 h-7 text-white" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  Public
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Open Network</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Networks without password protection. Users connect automatically without any credentials.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Device Compatibility */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-full blur-3xl" />
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
                  <DevicePhoneMobileIcon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Device Compatibility</h2>
              </div>
              <p className="text-gray-300 mb-8 max-w-2xl">
                WiFi QR codes are natively supported by most modern smartphones and tablets. No additional apps required.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg">iOS (iPhone/iPad)</h3>
                  </div>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    Built into the Camera app since iOS 11. Simply point your camera at the QR code and tap the notification to connect.
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/20 text-emerald-300 text-sm font-medium rounded-full">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    iOS 11+
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.523 2c.322 0 .634.127.863.354l2.26 2.253c.23.228.354.536.354.859v9.585c0 .67-.273 1.275-.713 1.713l-4.952 4.94a2.4 2.4 0 01-1.701.701h-9.57c-.667 0-1.277-.272-1.714-.712a2.417 2.417 0 01-.713-1.714V4.429c0-.67.272-1.277.713-1.715A2.42 2.42 0 014.064 2h13.46zm-5.478 6.546l-3.933 5.891-1.975-1.97a.64.64 0 00-.904.904l2.475 2.469a.641.641 0 00.476.199h.044a.64.64 0 00.489-.253l4.348-6.52a.64.64 0 10-1.02-.72z"/>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg">Android</h3>
                  </div>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    Supported by Camera app or Google Lens on most modern Android devices. Tap the WiFi prompt to connect instantly.
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/20 text-emerald-300 text-sm font-medium rounded-full">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Android 5.0+
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 blur-2xl opacity-25 scale-150" />
            <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100 p-10 shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-500/25">
                <WifiIcon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Create Your WiFi QR Code</h2>
              <p className="text-gray-500 mb-6 max-w-md mx-auto">Ready to generate a WiFi QR code for your network? Our tool creates codes that work with all devices.</p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                Generate WiFi QR Code
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
