export function getAssetPath(path: string): string {
  return `${import.meta.env.VITE_PUBLIC_URL}${path}`;
}
