'use client';

import React, { useEffect, useRef } from 'react';
import { WifiConfig } from '@/lib/wifi-qr';

interface PrintTemplateProps {
  wifiConfig: WifiConfig;
  qrData: string;
}

const Card = ({ qrData, ssid }: { qrData: string; ssid: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const init = async () => {
      const QRCodeStyling = (await import('qr-code-styling')).default;
      const qrCode = new QRCodeStyling({
        width: 120,
        height: 120,
        type: 'svg',
        data: qrData,
        imageOptions: {
          crossOrigin: 'anonymous',
          margin: 0
        },
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
    <div className="w-[88.9mm] h-[50.8mm] border border-dashed border-gray-300 flex items-center p-4 gap-4 bg-white text-black overflow-hidden relative break-inside-avoid">
      <div className="flex-shrink-0" ref={ref} />
      <div className="flex flex-col min-w-0 flex-1">
        <p className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-1">
          WiFi Access
        </p>
        <h3 className="font-bold text-lg leading-tight truncate w-full mb-1">
          {ssid}
        </h3>
        <p className="text-xs text-gray-600">Scan to connect</p>
      </div>
    </div>
  );
};

export const CardTemplate: React.FC<PrintTemplateProps> = ({ wifiConfig, qrData }) => {
  const cards = Array(8).fill(null);

  return (
    <div className="w-[210mm] min-h-[297mm] bg-white p-[10mm] mx-auto print:p-0">
      <div className="grid grid-cols-2 gap-0 w-fit mx-auto border-collapse">
        {cards.map((_, i) => (
          <Card key={i} qrData={qrData} ssid={wifiConfig.ssid} />
        ))}
      </div>
    </div>
  );
};

export default CardTemplate;
