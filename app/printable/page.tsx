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
      gradient: 'from-violet-500 to-purple-600',
      iconBg: 'bg-violet-100',
      iconColor: 'text-violet-600',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
        </svg>
      ),
    },
    {
      id: 'table-tent',
      name: 'Table Tent',
      description: 'Ideal for cafes, restaurants, and events',
      features: ['Foldable stand-up design', 'A5 folded size', 'Table placement'],
      gradient: 'from-blue-500 to-cyan-500',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
        </svg>
      ),
    },
    {
      id: 'door-sign',
      name: 'Door Sign',
      description: 'Best for hotels, Airbnb, and offices',
      features: ['A5 vertical poster', 'Clear visibility', 'Network name included'],
      gradient: 'from-emerald-500 to-teal-500',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </svg>
      ),
    },
  ];

  const useCases = [
    { emoji: '🏠', title: 'Home', desc: 'Share WiFi with guests', color: 'bg-rose-50 border-rose-100' },
    { emoji: '☕', title: 'Cafe', desc: 'Easy customer WiFi', color: 'bg-amber-50 border-amber-100' },
    { emoji: '🏨', title: 'Airbnb', desc: 'Seamless check-in', color: 'bg-sky-50 border-sky-100' },
    { emoji: '🏢', title: 'Office', desc: 'Reduce IT tickets', color: 'bg-indigo-50 border-indigo-100' },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-violet-200 to-purple-200 rounded-full blur-3xl opacity-30 -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-25 translate-x-1/2" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full blur-3xl opacity-25 -translate-x-1/2" />

      <div className="relative max-w-5xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2z" />
            </svg>
            Ready to Print
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
            Printable WiFi QR Code
            <span className="block bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Templates</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Generate professional WiFi QR code signs that match your space. Download and print in seconds.
          </p>
        </div>

        {/* Template Cards */}
        <section className="mb-20">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6 text-center">Choose Your Template</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {templates.map((template, index) => (
              <div 
                key={template.id} 
                className="group relative bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient header */}
                <div className={`h-32 bg-gradient-to-br ${template.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3),transparent_50%)]" />
                  <div className="absolute bottom-4 left-4">
                    <div className={`w-14 h-14 ${template.iconBg} rounded-2xl flex items-center justify-center ${template.iconColor} shadow-lg`}>
                      {template.icon}
                    </div>
                  </div>
                  {/* Decorative shapes */}
                  <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full" />
                  <div className="absolute right-12 bottom-4 w-16 h-16 bg-white/10 rounded-full" />
                </div>

                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">{template.name}</h3>
                  <p className="text-gray-500 text-sm mb-5">{template.description}</p>
                  
                  <ul className="space-y-2.5 mb-6">
                    {template.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className={`w-5 h-5 ${template.iconBg} ${template.iconColor} rounded-full flex items-center justify-center mr-2.5 flex-shrink-0`}>
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/"
                    className={`block w-full text-center py-3 bg-gradient-to-r ${template.gradient} text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-${template.gradient.split('-')[1]}-500/25`}
                  >
                    Create This Template
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How to Print Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-violet-500/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl" />
            
            <div className="relative flex flex-col lg:flex-row gap-10 items-start">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-medium mb-4">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Step by Step Guide
                </div>
                <h2 className="text-2xl font-bold mb-6">How to Print Your WiFi Sign</h2>
                
                <ol className="space-y-4">
                  {[
                    'Enter your WiFi network details on the generator page',
                    'Click the "Print" button to open the print page',
                    'Select your preferred template style',
                    'Click Print and choose your printer settings',
                  ].map((step, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <span className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-lg">
                        {index + 1}
                      </span>
                      <span className="text-gray-300 pt-1">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="flex-shrink-0 w-full lg:w-72">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold text-white">Pro Tips</p>
                  </div>
                  <ul className="text-sm text-gray-300 space-y-2.5">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-0.5">•</span>
                      Use high quality paper (120gsm+)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-0.5">•</span>
                      Enable borderless printing
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-0.5">•</span>
                      Print at actual size (100%)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-0.5">•</span>
                      Laminate for durability
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-20">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Perfect For Every Space</h2>
            <p className="text-gray-500">See how others use WiFi QR codes</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {useCases.map((item, index) => (
              <div 
                key={item.title} 
                className={`${item.color} border rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 cursor-default`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-4xl mb-4 block">{item.emoji}</span>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 blur-2xl opacity-30 scale-150" />
            <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100 p-10 shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Create Your WiFi Sign?</h2>
              <p className="text-gray-500 mb-6 max-w-md mx-auto">Generate a beautiful, printable QR code in seconds. Free and no signup required.</p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                Create WiFi QR Code
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
