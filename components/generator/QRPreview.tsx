'use client';

import { useEffect, useRef, useState } from 'react';

interface QRPreviewProps {
  data: string;
  size?: number;
}

export function QRPreview({ data, size = 256 }: QRPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const qrContainerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);
  const qrCodeRef = useRef<InstanceType<typeof import('qr-code-styling').default> | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !qrContainerRef.current) return;

    let mounted = true;

    const initQR = async () => {
      const QRCodeStyling = (await import('qr-code-styling')).default;
      
      if (!mounted || !qrContainerRef.current) return;

      qrCodeRef.current = new QRCodeStyling({
        width: size,
        height: size,
        type: 'svg',
        data: data || 'WIFI:T:WPA;S:Example;P:password;;',
        dotsOptions: {
          color: '#000000',
          type: 'rounded',
        },
        backgroundOptions: {
          color: '#ffffff',
        },
        cornersSquareOptions: {
          type: 'extra-rounded',
        },
        cornersDotOptions: {
          type: 'dot',
        },
      });

      qrContainerRef.current.innerHTML = '';
      qrCodeRef.current.append(qrContainerRef.current);
      setIsReady(true);
    };

    initQR();

    return () => {
      mounted = false;
    };
  }, [size, data]);

  useEffect(() => {
    if (qrCodeRef.current && data && isReady) {
      qrCodeRef.current.update({ data });
    }
  }, [data, isReady]);

  return (
    <div className="flex flex-col items-center" ref={containerRef}>
      <div
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex items-center justify-center"
        style={{ width: size + 32, height: size + 32 }}
        role="img"
        aria-label={data ? "WiFi QR code - scan to connect to network" : "QR code preview placeholder"}
      >
        <div 
          ref={qrContainerRef} 
          style={{ width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
