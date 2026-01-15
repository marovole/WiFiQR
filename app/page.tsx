'use client';

import { useState, useCallback, useMemo } from 'react';
import { WifiForm } from '@/components/generator/WifiForm';
import { QRPreview } from '@/components/generator/QRPreview';
import { ExportButtons } from '@/components/generator/ExportButtons';
import { HowToSection } from '@/components/content/HowToSection';
import { UseCasesSection } from '@/components/content/UseCasesSection';
import { TrustBlock } from '@/components/content/TrustBlock';
import { FAQSection } from '@/components/content/FAQSection';
import { type WifiConfig, generateWifiQRData } from '@/lib/wifi-qr';
import { softwareApplicationSchema, generateFAQSchema, faqData } from '@/lib/schemas';

export default function Home() {
  const [wifiConfig, setWifiConfig] = useState<WifiConfig>({
    ssid: '',
    password: '',
    security: 'WPA',
    hidden: false,
  });

  const qrData = useMemo(() => generateWifiQRData(wifiConfig), [wifiConfig]);

  const handleConfigChange = useCallback((config: WifiConfig) => {
    setWifiConfig(config);
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqData)),
        }}
      />

      <div className="relative">
        <div className="gradient-blur bg-blue-400 -top-20 -left-40 animate-pulse-soft" />
        <div className="gradient-blur bg-purple-400 -top-40 right-0 animate-pulse-soft" style={{ animationDelay: '1s' }} />
        
        <section className="relative pt-12 pb-16 md:pt-20 md:pb-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12 md:mb-16 animate-fade-up">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-5">
                WiFi QR Code Generator
              </h1>
              <p className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto leading-relaxed">
                Create a QR code for your WiFi. Guests scan to connect instantly.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="card p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
                    </svg>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    WiFi Details
                  </h2>
                </div>
                <WifiForm onChange={handleConfigChange} />
              </div>

              <div className="card p-6 md:p-8 flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
                    </svg>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Your QR Code
                  </h2>
                </div>
                
                <div className="flex-1 flex flex-col items-center justify-center">
                  <div className="mb-6">
                    <QRPreview data={qrData} size={200} />
                  </div>

                  {!wifiConfig.ssid && (
                    <p className="text-sm text-gray-400 text-center mb-6">
                      Enter your network name to generate
                    </p>
                  )}

                  <div className="w-full">
                    <ExportButtons qrData={qrData} wifiConfig={wifiConfig} />
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-center gap-2 text-xs text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 text-green-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                  <span>100% local • Your data never leaves your device</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <HowToSection />
        <UseCasesSection />
        <TrustBlock />
        <FAQSection />
      </div>
    </>
  );
}
