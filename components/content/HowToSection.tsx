const steps = [
  {
    number: '01',
    title: 'Enter WiFi name',
    description: 'Type your network SSID exactly as it appears.',
  },
  {
    number: '02',
    title: 'Add password',
    description: 'Enter your WiFi password and security type.',
  },
  {
    number: '03',
    title: 'Download or print',
    description: 'Get your QR code as PNG, SVG, or print it.',
  },
];

export function HowToSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
            Three simple steps
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative text-center md:text-left"
            >
              <div className="text-5xl font-bold text-gray-100 mb-4">
                {step.number}
              </div>
              
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-6 w-12 h-px bg-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
