export function encodePrintData(data: object): string {
  return btoa(JSON.stringify(data));
}

export function decodePrintData<T>(encoded: string): T | null {
  try {
    return JSON.parse(atob(encoded)) as T;
  } catch {
    return null;
  }
}

export function sanitizeFilename(name: string): string {
  return name.replace(/[^a-zA-Z0-9-_]/g, '-').toLowerCase();
}
