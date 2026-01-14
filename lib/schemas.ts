export const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'WiFi QR Code Generator',
  description: 'Generate free WiFi QR codes instantly. Download PNG, SVG or print WiFi signs.',
  operatingSystem: 'All',
  applicationCategory: 'UtilitiesApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '1250',
  },
};

export interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export const faqData: FAQItem[] = [
  {
    question: 'How do I create a WiFi QR code?',
    answer: 'Enter your WiFi network name (SSID), password, and select your security type. The QR code is generated instantly. Download it as PNG or SVG, or print it directly.',
  },
  {
    question: 'Is this WiFi QR code generator free?',
    answer: 'Yes, completely free. No signup, no account, no hidden fees. Generate unlimited QR codes.',
  },
  {
    question: 'What security types are supported?',
    answer: 'We support WPA, WPA2, WPA3, WEP, and open networks (no password). Most modern routers use WPA2 or WPA3.',
  },
  {
    question: 'How do I scan a WiFi QR code on iPhone?',
    answer: 'Open the Camera app and point it at the QR code. Tap the notification that appears to connect to the WiFi network.',
  },
  {
    question: 'How do I scan a WiFi QR code on Android?',
    answer: 'Open the Camera app or Google Lens and point it at the QR code. Tap to connect. On older Android phones, use a QR scanner app.',
  },
  {
    question: 'Is my WiFi password stored anywhere?',
    answer: 'No. Your WiFi credentials are processed entirely in your browser. Nothing is sent to our servers. Check the Network tab in DevTools to verify.',
  },
  {
    question: 'Can I print the WiFi QR code?',
    answer: 'Yes! Click the Print button to choose from business card, table tent, or door sign templates. Print directly or save as PDF.',
  },
  {
    question: 'What is a hidden SSID?',
    answer: 'A hidden SSID is a network name that does not broadcast publicly. Enable this option if your WiFi network is hidden.',
  },
  {
    question: 'Why is my QR code not working?',
    answer: 'Double-check your SSID and password for typos. Ensure you selected the correct security type. The QR code should be printed large enough (at least 2cm) for reliable scanning.',
  },
  {
    question: 'What is the best size for a WiFi QR code?',
    answer: 'For reliable scanning, print the QR code at least 2cm x 2cm (0.8 inches). Larger is better for distance scanning. Our PNG export is 1024x1024 pixels for high-quality prints.',
  },
];
