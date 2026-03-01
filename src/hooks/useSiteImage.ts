import { useState, useEffect, useCallback } from 'react';
import { getImage, getAllImages } from '@/lib/imageStore';

// Hook to get a single image URL that updates when the image store changes
export function useSiteImage(key: string): string {
  const [url, setUrl] = useState(() => getImage(key));

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail.key === key || detail.key === 'all') {
        setUrl(getImage(key));
      }
    };
    window.addEventListener('site-images-updated', handler);
    return () => window.removeEventListener('site-images-updated', handler);
  }, [key]);

  return url;
}

// Hook to get multiple image URLs that update when any image changes
export function useSiteImages(keys: string[]): Record<string, string> {
  const [images, setImages] = useState<Record<string, string>>(() => {
    const result: Record<string, string> = {};
    keys.forEach(k => { result[k] = getImage(k); });
    return result;
  });

  useEffect(() => {
    const handler = () => {
      const result: Record<string, string> = {};
      keys.forEach(k => { result[k] = getImage(k); });
      setImages(result);
    };
    window.addEventListener('site-images-updated', handler);
    return () => window.removeEventListener('site-images-updated', handler);
  }, [keys.join(',')]);

  return images;
}

// Hook to get all site images
export function useAllSiteImages(): Record<string, string> {
  const [images, setImages] = useState<Record<string, string>>(() => getAllImages());

  useEffect(() => {
    const handler = () => {
      setImages(getAllImages());
    };
    window.addEventListener('site-images-updated', handler);
    return () => window.removeEventListener('site-images-updated', handler);
  }, []);

  return images;
}
