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
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-6">
        <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
          </svg>
        </div>
        <h1 className="text-xl font-semibold text-gray-900 mb-2">No WiFi Data Found</h1>
        <p className="text-gray-500 mb-6 max-w-sm">Please generate a QR code first, then click the Print button.</p>
        <Button variant="primary" onClick={() => window.location.href = '/'}>
          Go to Generator
        </Button>
      </div>
    );
  }

  const qrData = generateWifiQRData(wifiConfig);

  const templates: { id: TemplateType; name: string; description: string; icon: React.ReactNode }[] = [
    { 
      id: 'card', 
      name: 'Business Card', 
      description: '8 cards per page',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
        </svg>
      )
    },
    { 
      id: 'table-tent', 
      name: 'Table Tent', 
      description: 'Foldable stand',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
        </svg>
      )
    },
    { 
      id: 'door-sign', 
      name: 'Door Sign', 
      description: 'A5 poster',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </svg>
      )
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="no-print mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Print WiFi QR Code</h1>
            <p className="text-gray-500 mt-1">Choose a template and print your WiFi sign</p>
          </div>
          <Button variant="primary" onClick={() => handlePrint()}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
            </svg>
            Print
          </Button>
        </div>

        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 mb-8">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-amber-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-amber-800">Privacy Notice</p>
              <p className="text-sm text-amber-700 mt-0.5">
                Your WiFi credentials are encoded in the URL. Avoid sharing this link publicly.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {templates.map((t) => (
            <button
              key={t.id}
              onClick={() => setTemplate(t.id)}
              className={`p-4 rounded-2xl border-2 text-left transition-all duration-200 ${
                template === t.id
                  ? 'border-gray-900 bg-gray-50'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                template === t.id ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600'
              }`}>
                {t.icon}
              </div>
              <p className="font-medium text-gray-900">{t.name}</p>
              <p className="text-sm text-gray-500 mt-0.5">{t.description}</p>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
          <span>Preview</span>
        </div>
      </div>

      <div className="bg-gray-100 rounded-2xl p-6 overflow-auto">
        <div ref={printRef} className="print-container bg-white rounded-xl shadow-sm mx-auto" style={{ width: 'fit-content' }}>
          {template === 'card' && <CardTemplate wifiConfig={wifiConfig} qrData={qrData} />}
          {template === 'table-tent' && <TableTentTemplate wifiConfig={wifiConfig} qrData={qrData} />}
          {template === 'door-sign' && <DoorSignTemplate wifiConfig={wifiConfig} qrData={qrData} />}
        </div>
      </div>
    </div>
  );
}

export default function PrintPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin h-8 w-8 border-2 border-gray-900 border-t-transparent rounded-full" />
      </div>
    }>
      <PrintPageContent />
    </Suspense>
  );
}
