'use client';

import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/Button';
import { useQRCode } from '@/hooks/useQRCode';
import { useClipboard } from '@/hooks/useClipboard';
import { sanitizeFilename, encodePrintData } from '@/lib/export';
import { type WifiConfig } from '@/lib/wifi-qr';

interface ExportButtonsProps {
  qrData: string;
  wifiConfig: WifiConfig;
}

export function ExportButtons({ qrData, wifiConfig }: ExportButtonsProps) {
  const { downloadPng, downloadSvg, getRawData } = useQRCode(qrData);
  const { copied, copyToClipboard } = useClipboard();
  const [loading, setLoading] = useState<string | null>(null);

  const filename = wifiConfig.ssid ? `wifi-qr-${sanitizeFilename(wifiConfig.ssid)}` : 'wifi-qr';

  const handleDownloadPng = useCallback(async () => {
    if (!wifiConfig.ssid) return;
    setLoading('png');
    await downloadPng(filename);
    setLoading(null);
  }, [downloadPng, filename, wifiConfig.ssid]);

  const handleDownloadSvg = useCallback(async () => {
    if (!wifiConfig.ssid) return;
    setLoading('svg');
    await downloadSvg(filename);
    setLoading(null);
  }, [downloadSvg, filename, wifiConfig.ssid]);

  const handleCopy = useCallback(async () => {
    if (!wifiConfig.ssid) return;
    setLoading('copy');
    const blob = await getRawData('png');
    if (blob) {
      await copyToClipboard(blob);
    }
    setLoading(null);
  }, [getRawData, copyToClipboard, wifiConfig.ssid]);

  const handlePrint = useCallback(() => {
    if (!wifiConfig.ssid) return;
    const encoded = encodePrintData(wifiConfig);
    window.open(`/print/?data=${encoded}`, '_blank');
  }, [wifiConfig]);

  const isDisabled = !wifiConfig.ssid;

  return (
    <div className="grid grid-cols-2 gap-2">
      <Button
        variant="primary"
        onClick={handleDownloadPng}
        disabled={isDisabled}
        isLoading={loading === 'png'}
        fullWidth
        aria-label="Download QR code as PNG image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1.5" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
        PNG
      </Button>

      <Button
        variant="secondary"
        onClick={handleDownloadSvg}
        disabled={isDisabled}
        isLoading={loading === 'svg'}
        fullWidth
        aria-label="Download QR code as SVG vector"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1.5" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
        SVG
      </Button>

      <Button
        variant="secondary"
        onClick={handleCopy}
        disabled={isDisabled}
        isLoading={loading === 'copy'}
        fullWidth
        aria-label={copied ? "QR code copied to clipboard" : "Copy QR code to clipboard"}
      >
        {copied ? (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1.5 text-green-600" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            Copied
          </>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
            </svg>
            Copy
          </>
        )}
      </Button>

      <Button
        variant="secondary"
        onClick={handlePrint}
        disabled={isDisabled}
        fullWidth
        aria-label="Open print page with WiFi QR code templates"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1.5" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
        </svg>
        Print
      </Button>
    </div>
  );
}
