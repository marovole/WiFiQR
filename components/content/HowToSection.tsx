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
    <section className="py-16 border-t border-gray-200">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          How to Create a WiFi QR Code
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Generate your WiFi QR code in three simple steps
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div key={step.number} className="text-center">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
              {step.number}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
