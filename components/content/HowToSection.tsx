const steps = [
  {
    number: '1',
    title: 'Enter your WiFi network name',
    description: 'Type your network SSID exactly as it appears on your router.',
  },
  {
    number: '2',
    title: 'Add password and security type',
    description: 'Enter your WiFi password and select WPA/WPA2/WPA3 (most common).',
  },
  {
    number: '3',
    title: 'Download or print',
    description: 'Get your QR code as PNG, SVG, or print a ready-to-use WiFi sign.',
  },
];

export function HowToSection() {
  return (
    <section className="py-20 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How to Create a WiFi QR Code
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Generate your WiFi QR code in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div 
              key={step.number}
              className="relative group"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-xl flex items-center justify-center text-xl font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                {step.number}
              </div>
              
              <div className="pt-8 p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
