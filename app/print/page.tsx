'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useRef, useEffect, Suspense } from 'react';
import { useReactToPrint } from 'react-to-print';
import { decodePrintData } from '@/lib/export';
import { type WifiConfig, generateWifiQRData } from '@/lib/wifi-qr';
import { Button } from '@/components/ui/Button';
import { CardTemplate } from '@/components/print/CardTemplate';
import { TableTentTemplate } from '@/components/print/TableTentTemplate';
import { DoorSignTemplate } from '@/components/print/DoorSignTemplate';

type TemplateType = 'card' | 'table-tent' | 'door-sign';

function PrintPageContent() {
  const searchParams = useSearchParams();
  const [template, setTemplate] = useState<TemplateType>('card');
  const [wifiConfig, setWifiConfig] = useState<WifiConfig | null>(null);
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: wifiConfig ? `WiFi-QR-${wifiConfig.ssid}` : 'WiFi-QR',
  });

  useEffect(() => {
    const data = searchParams.get('data');
    if (data) {
      const decoded = decodePrintData<WifiConfig>(data);
      if (decoded) {
        setWifiConfig(decoded);
      }
    }
  }, [searchParams]);

  if (!wifiConfig) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gray-400 mb-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
        </svg>
        <h1 className="text-xl font-semibold text-gray-900 mb-2">No WiFi Data Found</h1>
        <p className="text-gray-600 mb-4">Please generate a QR code first, then click the Print button.</p>
        <Button variant="primary" onClick={() => window.location.href = '/'}>
          Go to Generator
        </Button>
      </div>
    );
  }

  const qrData = generateWifiQRData(wifiConfig);

  const templates: { id: TemplateType; name: string; description: string }[] = [
    { id: 'card', name: 'Business Card', description: '8-10 cards per A4 page' },
    { id: 'table-tent', name: 'Table Tent', description: 'Foldable stand-up sign' },
    { id: 'door-sign', name: 'Door Sign', description: 'A5 vertical poster' },
  ];

  return (
    <div className="py-8">
      <div className="no-print mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Print WiFi QR Code</h1>
            <p className="text-gray-600 mt-1">Choose a template and print your WiFi sign</p>
          </div>
          <Button variant="primary" onClick={() => handlePrint()}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
            </svg>
            Print
          </Button>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-amber-600 mt-0.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
            </svg>
            <div>
              <p className="text-sm font-medium text-amber-800">Privacy Notice</p>
              <p className="text-sm text-amber-700 mt-1">
                Your WiFi credentials are encoded in the URL. Avoid sharing this link publicly.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {templates.map((t) => (
            <button
              key={t.id}
              onClick={() => setTemplate(t.id)}
              className={`p-4 rounded-lg border-2 text-left transition-colors ${
                template === t.id
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <p className="font-medium text-gray-900">{t.name}</p>
              <p className="text-sm text-gray-500 mt-1">{t.description}</p>
            </button>
          ))}
        </div>
      </div>

      <div ref={printRef} className="print-container bg-white">
        {template === 'card' && <CardTemplate wifiConfig={wifiConfig} qrData={qrData} />}
        {template === 'table-tent' && <TableTentTemplate wifiConfig={wifiConfig} qrData={qrData} />}
        {template === 'door-sign' && <DoorSignTemplate wifiConfig={wifiConfig} qrData={qrData} />}
      </div>
    </div>
  );
}

export default function PrintPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full" />
      </div>
    }>
      <PrintPageContent />
    </Suspense>
  );
}
