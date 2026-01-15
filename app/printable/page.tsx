import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Printable WiFi QR Code Templates | WiFi QR Generator',
  description: 'Download and print WiFi QR code signs for your home, cafe, Airbnb, or office. Choose from business cards, table tents, and door signs.',
};

export default function PrintablePage() {
  const templates = [
    {
      id: 'card',
      name: 'Business Card',
      description: 'Perfect for personal use or small offices',
      features: ['8-10 cards per A4 page', 'Compact size (55x85mm)', 'Standard business card dimensions'],
      imageAlt: 'WiFi QR code business card template',
    },
    {
      id: 'table-tent',
      name: 'Table Tent',
      description: 'Ideal for cafes, restaurants, and events',
      features: ['Foldable stand-up design', 'A5 folded size', 'Perfect for table placement'],
      imageAlt: 'WiFi QR code table tent template',
    },
    {
      id: 'door-sign',
      name: 'Door Sign',
      description: 'Best for hotels, Airbnb, and offices',
      features: ['A5 vertical poster', 'Clear visibility', 'Includes network name and password'],
      imageAlt: 'WiFi QR code door sign template',
    },
  ];

  return (
    <div className="py-8">
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Printable WiFi QR Code Templates
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Generate a professional WiFi QR code sign that matches your space. Choose from three ready-to-print templates.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Template</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {templates.map((template) => (
            <div key={template.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gray-100 h-48 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-24 h-24 mx-auto bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center mb-3">
                    <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <p className="text-xs text-gray-500">{template.imageAlt}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{template.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{template.description}</p>
                <ul className="space-y-2 mb-6">
                  {template.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/"
                  className="block w-full text-center py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Create This Template
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-50 rounded-2xl p-8 mb-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Print</h2>
            <ol className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0">1</span>
                <span>Enter your WiFi network details on the generator page</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0">2</span>
                <span>Click the &quot;Print&quot; button to open the print page</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0">3</span>
                <span>Select your preferred template (Business Card, Table Tent, or Door Sign)</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 flex-shrink-0">4</span>
                <span>Click Print and choose your printer settings</span>
              </li>
            </ol>
          </div>
          <div className="flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 w-64">
              <p className="text-sm font-medium text-gray-900 mb-2">Print Tips</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Use high quality paper</li>
                <li>• Enable borderless printing</li>
                <li>• Print at actual size (100%)</li>
                <li>• Laminate for durability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Use Cases</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Home</h3>
            <p className="text-sm text-gray-600">Share WiFi with guests without spelling out your password</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Cafe</h3>
            <p className="text-sm text-gray-600">Make it easy for customers to connect to your WiFi</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Airbnb</h3>
            <p className="text-sm text-gray-600">Include WiFi info in your welcome guide for seamless check-in</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Office</h3>
            <p className="text-sm text-gray-600">Reduce IT support tickets with self-service WiFi access</p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Create Your WiFi Sign?</h2>
        <p className="text-gray-600 mb-6">Generate a printable QR code in seconds</p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          Create WiFi QR Code
        </Link>
      </section>
    </div>
  );
}
