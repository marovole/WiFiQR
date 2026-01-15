const useCases = [
  {
    emoji: '🏠',
    title: 'Home',
    description: 'Share WiFi with guests without spelling out passwords.',
  },
  {
    emoji: '☕',
    title: 'Cafe',
    description: 'Let customers connect instantly with a table sign.',
  },
  {
    emoji: '🏨',
    title: 'Airbnb',
    description: 'Include in your welcome guide for seamless check-in.',
  },
  {
    emoji: '🏢',
    title: 'Office',
    description: 'Reduce IT tickets with self-service connection.',
  },
];

export function UseCasesSection() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
            Perfect for any space
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="group bg-white rounded-2xl p-6 border border-gray-100
                       hover:border-gray-200 hover:shadow-md
                       transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl">{useCase.emoji}</span>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
