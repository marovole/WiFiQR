'use client';

import { useState, useCallback, useMemo } from 'react';
import { WifiForm } from '@/components/generator/WifiForm';
import { QRPreview } from '@/components/generator/QRPreview';
import { ExportButtons } from '@/components/generator/ExportButtons';
import { HowToSection } from '@/components/content/HowToSection';
import { UseCasesSection } from '@/components/content/UseCasesSection';
import { FAQSection } from '@/components/content/FAQSection';
import { TrustBlock } from '@/components/content/TrustBlock';
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

      <div className="py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Free WiFi QR Code Generator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Create a QR code for your WiFi network. Guests can scan it to connect instantly.
            No signup required. 100% free.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="card p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                WiFi Details
              </h2>
              <WifiForm onChange={handleConfigChange} />
            </div>

            <div className="flex flex-col items-center">
              <div className="card p-8 w-full">
                <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                  Your QR Code
                </h2>
                
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                  <div className="relative flex justify-center mb-6">
                    <QRPreview data={qrData} size={240} />
                  </div>
                </div>

                {!wifiConfig.ssid && (
                  <p className="text-sm text-gray-500 text-center mb-6">
                    Enter your network name to generate a QR code
                  </p>
                )}

                <ExportButtons qrData={qrData} wifiConfig={wifiConfig} />
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
                <span>Generated locally. Your data never leaves your device.</span>
              </div>
            </div>
          </div>
        </div>

        <HowToSection />
        <UseCasesSection />
        <TrustBlock />
        <FAQSection />
      </div>
    </>
  );
}
