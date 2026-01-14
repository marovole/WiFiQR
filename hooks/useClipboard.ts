'use client';

import { useState, useCallback } from 'react';

interface UseClipboardResult {
  copied: boolean;
  copyToClipboard: (blob: Blob) => Promise<boolean>;
  copyText: (text: string) => Promise<boolean>;
  reset: () => void;
}

export function useClipboard(timeout: number = 2000): UseClipboardResult {
  const [copied, setCopied] = useState(false);

  const reset = useCallback(() => {
    setCopied(false);
  }, []);

  const copyToClipboard = useCallback(async (blob: Blob): Promise<boolean> => {
    try {
      const item = new ClipboardItem({
        [blob.type]: blob,
      });

      await navigator.clipboard.write([item]);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, timeout);

      return true;
    } catch (error) {
      console.error('Failed to copy image:', error);
      return false;
    }
  }, [timeout]);

  const copyText = useCallback(async (text: string): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, timeout);

      return true;
    } catch (error) {
      console.error('Failed to copy text:', error);
      return false;
    }
  }, [timeout]);

  return {
    copied,
    copyToClipboard,
    copyText,
    reset,
  };
}
