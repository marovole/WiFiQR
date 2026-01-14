'use client';

import React, { useEffect, useRef } from 'react';
import { WifiConfig } from '@/lib/wifi-qr';

interface PrintTemplateProps {
  wifiConfig: WifiConfig;
  qrData: string;
}

export const DoorSignTemplate: React.FC<PrintTemplateProps> = ({ wifiConfig, qrData }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const init = async () => {
      const QRCodeStyling = (await import('qr-code-styling')).default;
      const qrCode = new QRCodeStyling({
        width: 400,
        height: 400,
        type: 'svg',
        data: qrData,
        dotsOptions: {
          color: '#000000',
          type: 'extra-rounded'
        },
        cornersSquareOptions: {
          type: 'extra-rounded'
        },
        cornersDotOptions: {
          type: 'dot'
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
    <div className="w-[148mm] h-[210mm] mx-auto bg-white p-8 flex flex-col items-center justify-between text-black border border-gray-200 print:border-0 shadow-lg print:shadow-none m-4">
      <div className="w-full text-center space-y-4 pt-8">
        <h1 className="text-4xl font-black tracking-tight uppercase">Welcome</h1>
        <div className="h-1 w-20 bg-black mx-auto"></div>
        <p className="text-gray-500 font-medium uppercase tracking-widest text-sm">Scan to Connect</p>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center py-8">
         <div className="p-4 border-4 border-black rounded-3xl" ref={ref} />
      </div>

      <div className="w-full text-center pb-8 space-y-2">
        <p className="text-xs uppercase text-gray-400 font-bold tracking-widest">Network</p>
        <h2 className="text-3xl font-bold break-words px-4 leading-tight">
          {wifiConfig.ssid}
        </h2>
      </div>
    </div>
  );
};

export default DoorSignTemplate;
