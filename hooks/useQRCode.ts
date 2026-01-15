'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import type QRCodeStyling from 'qr-code-styling';

interface UseQRCodeOptions {
  size?: number;
  dotsColor?: string;
  backgroundColor?: string;
}

export function useQRCode(data: string, options: UseQRCodeOptions = {}) {
  const { size = 256, dotsColor = '#000000', backgroundColor = '#ffffff' } = options;
  
  const qrRef = useRef<HTMLDivElement>(null);
  const qrCodeInstance = useRef<QRCodeStyling | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const initQR = async () => {
      const QRCodeStylingModule = (await import('qr-code-styling')).default;
      
      qrCodeInstance.current = new QRCodeStylingModule({
        width: size,
        height: size,
        type: 'svg',
        data: data || 'WIFI:T:WPA;S:Example;P:password;;',
        dotsOptions: {
          color: dotsColor,
          type: 'rounded',
        },
        backgroundOptions: {
          color: backgroundColor,
        },
        cornersSquareOptions: {
          type: 'extra-rounded',
        },
        cornersDotOptions: {
          type: 'dot',
        },
      });

      if (qrRef.current) {
        qrRef.current.innerHTML = '';
        qrCodeInstance.current.append(qrRef.current);
      }
      setIsReady(true);
    };

    initQR();
  }, [size, dotsColor, backgroundColor]);

  useEffect(() => {
    if (qrCodeInstance.current && data && isReady) {
      qrCodeInstance.current.update({ data });
    }
  }, [data, isReady]);

  const downloadPng = useCallback(async (filename: string = 'wifi-qr') => {
    if (!qrCodeInstance.current) {
      const QRCodeStylingModule = (await import('qr-code-styling')).default;
      qrCodeInstance.current = new QRCodeStylingModule({
        width: 1024,
        height: 1024,
        type: 'svg',
        data: data,
        dotsOptions: { color: dotsColor, type: 'rounded' },
        backgroundOptions: { color: backgroundColor },
        cornersSquareOptions: { type: 'extra-rounded' },
        cornersDotOptions: { type: 'dot' },
      });
    } else {
      qrCodeInstance.current.update({ width: 1024, height: 1024, data });
    }
    
    await qrCodeInstance.current.download({
      name: filename,
      extension: 'png',
    });
    
    qrCodeInstance.current.update({ width: size, height: size });
  }, [data, size, dotsColor, backgroundColor]);

  const downloadSvg = useCallback(async (filename: string = 'wifi-qr') => {
    if (!qrCodeInstance.current) {
      const QRCodeStylingModule = (await import('qr-code-styling')).default;
      qrCodeInstance.current = new QRCodeStylingModule({
        width: size,
        height: size,
        type: 'svg',
        data: data,
        dotsOptions: { color: dotsColor, type: 'rounded' },
        backgroundOptions: { color: backgroundColor },
        cornersSquareOptions: { type: 'extra-rounded' },
        cornersDotOptions: { type: 'dot' },
      });
    } else {
      qrCodeInstance.current.update({ data });
    }
    
    await qrCodeInstance.current.download({
      name: filename,
      extension: 'svg',
    });
  }, [data, size, dotsColor, backgroundColor]);

  const getRawData = useCallback(async (format: 'png' | 'svg' = 'png'): Promise<Blob | null> => {
    if (!qrCodeInstance.current) {
      const QRCodeStylingModule = (await import('qr-code-styling')).default;
      qrCodeInstance.current = new QRCodeStylingModule({
        width: format === 'png' ? 1024 : size,
        height: format === 'png' ? 1024 : size,
        type: 'svg',
        data: data,
        dotsOptions: { color: dotsColor, type: 'rounded' },
        backgroundOptions: { color: backgroundColor },
        cornersSquareOptions: { type: 'extra-rounded' },
        cornersDotOptions: { type: 'dot' },
      });
    } else {
      if (format === 'png') {
        qrCodeInstance.current.update({ width: 1024, height: 1024, data });
      } else {
        qrCodeInstance.current.update({ data });
      }
    }
    
    const blob = await qrCodeInstance.current.getRawData(format);
    
    if (format === 'png') {
      qrCodeInstance.current.update({ width: size, height: size });
    }
    
    return blob as Blob | null;
  }, [data, size, dotsColor, backgroundColor]);

  return {
    qrRef,
    qrCode: qrCodeInstance.current,
    isReady,
    downloadPng,
    downloadSvg,
    getRawData,
  };
}
