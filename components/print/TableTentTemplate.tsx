'use client';

import React, { useEffect, useRef } from 'react';
import { WifiConfig } from '@/lib/wifi-qr';

interface PrintTemplateProps {
  wifiConfig: WifiConfig;
  qrData: string;
}

const TentPanel = ({ qrData, ssid, inverted = false }: { qrData: string; ssid: string; inverted?: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const init = async () => {
      const QRCodeStyling = (await import('qr-code-styling')).default;
      const qrCode = new QRCodeStyling({
        width: 200,
        height: 200,
        type: 'svg',
        data: qrData,
        dotsOptions: {
          color: '#000000',
          type: 'rounded'
        },
        cornersSquareOptions: {
          type: 'extra-rounded'
        },
        backgroundOptions: {
          color: 'transparent',
        },
      });

      if (ref.current) {
        ref.current.innerHTML = '';
        qrCode.append(ref.current);
      }
    };

    init();
  }, [qrData]);

  return (
    <div 
      className={`h-[100mm] flex flex-col items-center justify-center p-8 gap-4 ${inverted ? 'rotate-180' : ''}`}
      style={{ transformOrigin: 'center' }}
    >
      <div className="text-center space-y-2">
        <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-gray-500">Guest WiFi</h3>
        <div className="text-3xl font-bold text-black max-w-[80%] mx-auto break-words leading-tight">
          {ssid}
        </div>
      </div>
      
      <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm" ref={ref} />
      
      <p className="text-sm text-gray-600 font-medium">Scan QR code to join</p>
    </div>
  );
};

export const TableTentTemplate: React.FC<PrintTemplateProps> = ({ wifiConfig, qrData }) => {
  return (
    <div className="w-full h-screen bg-white flex flex-col items-center justify-center overflow-hidden">
      <div className="w-[297mm] h-[210mm] flex flex-col relative bg-white">
        
        <div className="h-[105mm] w-full border-b border-dashed border-gray-200 flex items-end justify-center pb-4">
          <TentPanel qrData={qrData} ssid={wifiConfig.ssid} inverted={true} />
        </div>

        <div className="h-[105mm] w-full flex items-start justify-center pt-4">
          <TentPanel qrData={qrData} ssid={wifiConfig.ssid} inverted={false} />
        </div>

        <div className="absolute top-1/2 left-0 w-full text-[8px] text-gray-300 text-center -translate-y-1/2">
          FOLD HERE
        </div>
      </div>
    </div>
  );
};

export default TableTentTemplate;
