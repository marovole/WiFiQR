'use client';

import { useState, useCallback, useEffect } from 'react';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Checkbox } from '@/components/ui/Checkbox';
import { type WifiConfig, type SecurityType, validateWifiConfig } from '@/lib/wifi-qr';

interface WifiFormProps {
  onChange: (config: WifiConfig) => void;
  initialConfig?: Partial<WifiConfig>;
}

const securityOptions = [
  { value: 'WPA', label: 'WPA/WPA2/WPA3' },
  { value: 'WEP', label: 'WEP' },
  { value: 'nopass', label: 'None (Open Network)' },
];

export function WifiForm({ onChange, initialConfig }: WifiFormProps) {
  const [config, setConfig] = useState<WifiConfig>({
    ssid: initialConfig?.ssid || '',
    password: initialConfig?.password || '',
    security: initialConfig?.security || 'WPA',
    hidden: initialConfig?.hidden || false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange = useCallback((field: keyof WifiConfig, value: string | boolean) => {
    setConfig((prev) => {
      const updated = { ...prev, [field]: value };
      
      if (field === 'security' && value === 'nopass') {
        updated.password = '';
      }
      
      return updated;
    });
    
    setTouched((prev) => ({ ...prev, [field]: true }));
  }, []);

  useEffect(() => {
    const validation = validateWifiConfig(config);
    setErrors(validation.errors);
    onChange(config);
  }, [config, onChange]);

  const isPasswordDisabled = config.security === 'nopass';

  return (
    <div className="space-y-5">
      <Input
        label="Network Name (SSID)"
        placeholder="Enter your WiFi network name"
        value={config.ssid}
        onChange={(e) => handleChange('ssid', e.target.value)}
        error={touched.ssid ? errors.ssid : undefined}
      />

      <Select
        label="Security Type"
        options={securityOptions}
        value={config.security}
        onChange={(e) => handleChange('security', e.target.value as SecurityType)}
      />

      <Input
        label="Password"
        type="password"
        placeholder={isPasswordDisabled ? 'No password required' : 'Enter your WiFi password'}
        value={config.password}
        onChange={(e) => handleChange('password', e.target.value)}
        disabled={isPasswordDisabled}
        error={touched.password ? errors.password : undefined}
      />

      <Checkbox
        label="Hidden Network"
        checked={config.hidden}
        onChange={(e) => handleChange('hidden', e.target.checked)}
      />

      {config.security !== 'nopass' && config.password.length > 0 && config.password.length < 8 && (
        <p className="text-sm text-amber-600 flex items-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
          </svg>
          WPA passwords should be at least 8 characters
        </p>
      )}
    </div>
  );
}
