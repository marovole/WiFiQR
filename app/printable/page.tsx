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
      features: ['8 cards per A4 page', 'Compact 55x85mm size', 'Standard dimensions'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
        </svg>
      ),
    },
    {
      id: 'table-tent',
      name: 'Table Tent',
      description: 'Ideal for cafes, restaurants, and events',
      features: ['Foldable stand-up design', 'A5 folded size', 'Table placement'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
        </svg>
      ),
    },
    {
      id: 'door-sign',
      name: 'Door Sign',
      description: 'Best for hotels, Airbnb, and offices',
      features: ['A5 vertical poster', 'Clear visibility', 'Network name included'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4 tracking-tight">
          Printable WiFi QR Code Templates
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl">
          Generate a professional WiFi QR code sign that matches your space.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Choose Your Template</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {templates.map((template) => (
            <div key={template.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-gray-200 hover:shadow-md transition-all">
              <div className="bg-gray-50 p-6 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-2xl border border-gray-100 flex items-center justify-center text-gray-600">
                  {template.icon}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-medium text-gray-900 mb-1">{template.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{template.description}</p>
                <ul className="space-y-2 mb-5">
                  {template.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/"
                  className="block w-full text-center py-2.5 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors text-sm font-medium"
                >
                  Create This Template
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-12">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-900 mb-5">How to Print</h2>
            <ol className="space-y-3">
              <li className="flex items-start">
                <span className="w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-medium mr-3 flex-shrink-0">1</span>
                <span className="text-sm text-gray-600">Enter your WiFi network details on the generator page</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-medium mr-3 flex-shrink-0">2</span>
                <span className="text-sm text-gray-600">Click the &quot;Print&quot; button to open the print page</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-medium mr-3 flex-shrink-0">3</span>
                <span className="text-sm text-gray-600">Select your preferred template</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-medium mr-3 flex-shrink-0">4</span>
                <span className="text-sm text-gray-600">Click Print and choose your printer settings</span>
              </li>
            </ol>
          </div>
          <div className="flex-shrink-0 w-full md:w-auto">
            <div className="bg-white rounded-xl border border-gray-100 p-4">
              <p className="text-sm font-medium text-gray-900 mb-2">Print Tips</p>
              <ul className="text-sm text-gray-500 space-y-1.5">
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
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Use Cases</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { emoji: '🏠', title: 'Home', desc: 'Share WiFi with guests' },
            { emoji: '☕', title: 'Cafe', desc: 'Easy customer WiFi' },
            { emoji: '🏨', title: 'Airbnb', desc: 'Seamless check-in' },
            { emoji: '🏢', title: 'Office', desc: 'Reduce IT tickets' },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-2xl border border-gray-100 p-5 text-center">
              <span className="text-2xl mb-3 block">{item.emoji}</span>
              <h3 className="font-medium text-gray-900 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Ready to Create Your WiFi Sign?</h2>
        <p className="text-gray-500 mb-6 text-sm">Generate a printable QR code in seconds</p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 transition-colors"
        >
          Create WiFi QR Code
        </Link>
      </section>
    </div>
  );
}
