import { useState, useEffect, useCallback } from 'react';
import { getAllProjects, subscribeToProjects, type Project } from '@/lib/projectsStore';

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>(() => getAllProjects());

  const refresh = useCallback(() => {
    setProjects(getAllProjects());
  }, []);

  useEffect(() => {
    const unsub = subscribeToProjects(refresh);
    return unsub;
  }, [refresh]);

  return projects;
}
