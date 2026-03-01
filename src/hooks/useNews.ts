import { useState, useEffect, useCallback } from 'react';
import { getAllArticles, subscribeToNews, type NewsArticle } from '@/lib/newsStore';

export function useNews() {
  const [articles, setArticles] = useState<NewsArticle[]>(() => getAllArticles());

  const refresh = useCallback(() => {
    setArticles(getAllArticles());
  }, []);

  useEffect(() => {
    const unsub = subscribeToNews(refresh);
    return unsub;
  }, [refresh]);

  return articles;
}
