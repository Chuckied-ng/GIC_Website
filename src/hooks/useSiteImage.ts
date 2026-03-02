import { useState, useEffect } from 'react';
import { getImage, getAllImages, subscribeToImages } from '@/lib/imageStore';

// Hook to get a single image URL that updates in real-time via Supabase
export function useSiteImage(key: string): string {
  const [url, setUrl] = useState(() => getImage(key));

  useEffect(() => {
    setUrl(getImage(key));
    const unsub = subscribeToImages((updatedKey, updatedUrl) => {
      if (updatedKey === key || updatedKey === 'all') {
        setUrl(updatedKey === 'all' ? getImage(key) : updatedUrl);
      }
    });
    return unsub;
  }, [key]);

  return url;
}

// Hook to get multiple image URLs that update in real-time
export function useSiteImages(keys: string[]): Record<string, string> {
  const keysStr = keys.join(',');
  const [images, setImages] = useState<Record<string, string>>(() => {
    const result: Record<string, string> = {};
    keys.forEach(k => { result[k] = getImage(k); });
    return result;
  });

  useEffect(() => {
    const result: Record<string, string> = {};
    keys.forEach(k => { result[k] = getImage(k); });
    setImages(result);

    const unsub = subscribeToImages((updatedKey) => {
      if (keys.includes(updatedKey) || updatedKey === 'all') {
        const updated: Record<string, string> = {};
        keys.forEach(k => { updated[k] = getImage(k); });
        setImages(updated);
      }
    });
    return unsub;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keysStr]);

  return images;
}

// Hook to get all site images
export function useAllSiteImages(): Record<string, string> {
  const [images, setImages] = useState<Record<string, string>>(() => getAllImages());

  useEffect(() => {
    setImages(getAllImages());
    const unsub = subscribeToImages(() => {
      setImages(getAllImages());
    });
    return unsub;
  }, []);

  return images;
}
