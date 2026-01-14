export type SecurityType = 'WPA' | 'WEP' | 'nopass';

export interface WifiConfig {
  ssid: string;
  password: string;
  security: SecurityType;
  hidden: boolean;
}

export function escapeWifiString(str: string): string {
  return str.replace(/([\\;,:"'])/g, '\\$1');
}

export function generateWifiQRData(config: WifiConfig): string {
  const { ssid, password, security, hidden } = config;

  if (!ssid.trim()) return '';

  const escapedSSID = escapeWifiString(ssid);
  const escapedPassword = password ? escapeWifiString(password) : '';

  let result = `WIFI:T:${security};S:${escapedSSID};`;

  if (security !== 'nopass' && escapedPassword) {
    result += `P:${escapedPassword};`;
  }

  if (hidden) {
    result += 'H:true;';
  }

  result += ';';

  return result;
}

export function validateWifiConfig(config: WifiConfig): { valid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (!config.ssid.trim()) {
    errors.ssid = 'Network name is required';
  }

  if (config.security !== 'nopass' && config.password.length > 0 && config.password.length < 8) {
    errors.password = 'WPA passwords should be at least 8 characters';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
