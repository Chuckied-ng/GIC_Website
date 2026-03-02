// Projects data store — uses Supabase as source of truth so all changes
// are immediately visible to every visitor, not just the browser that made them.

import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

let supabase: SupabaseClient | null = null;

try {
  if (supabaseUrl && supabaseAnonKey) {
    supabase = createClient(supabaseUrl, supabaseAnonKey);
  } else {
    console.warn('Supabase credentials not found. Projects will use defaults.');
  }
} catch (err) {
  console.error('Failed to create Supabase client for projects:', err);
}

export interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  value: string;
  scope: string;
  image: string;
  status: 'Completed' | 'Ongoing';
}

// DB row is the same shape, just need status type handling
function rowToProject(row: Record<string, unknown>): Project {
  return {
    id: row.id as number,
    title: row.title as string,
    category: row.category as string,
    location: row.location as string,
    year: row.year as string,
    value: row.value as string,
    scope: row.scope as string,
    image: row.image as string,
    status: (row.status as string) === 'Ongoing' ? 'Ongoing' : 'Completed',
  };
}

function projectToRow(project: Omit<Project, 'id'>) {
  return {
    title: project.title,
    category: project.category,
    location: project.location,
    year: project.year,
    value: project.value,
    scope: project.scope,
    image: project.image,
    status: project.status,
  };
}

const defaultProjects: Project[] = [
  {
    id: 1,
    title: 'Oando - Road Rehabilitation',
    category: 'Onshore',
    location: 'Rivers State, Nigeria',
    year: '2024',
    value: '$1M',
    scope: 'Major civil works and rehabilitation of Akiri main road to drilling facility.',
    image: 'https://plus.unsplash.com/premium_photo-1661943489715-ea5e9dac7852?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    status: 'Completed',
  },
  {
    id: 2,
    title: 'Aiteo - Pipe fabrication and Waste management',
    category: 'Pipeline',
    location: 'OML 27, Bayelsa State',
    year: '2023',
    value: '$3M',
    scope: 'Pipe fabrication and Waste management',
    image: 'https://images.unsplash.com/photo-1689476814887-43b4a7dc34e8?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    status: 'Completed',
  },
  {
    id: 3,
    title: 'Shell - Waste Management',
    category: 'Processing',
    location: 'Bayelsa State, Nigeria',
    year: '2018',
    value: '$800k',
    scope: 'Waste management and procurement of pipe flex',
    image: 'https://images.unsplash.com/photo-1718642482960-77cfc3a4e2e5?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    status: 'Completed',
  },
  {
    id: 4,
    title: 'Renaissance - Human Capital Development',
    category: 'Onshore',
    location: 'Onne, Rivers State',
    year: '2026',
    value: '$3M',
    scope: 'Major civil works',
    image: 'https://images.unsplash.com/photo-1605475723788-08c82657b6af?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    status: 'Ongoing',
  },
  {
    id: 5,
    title: 'World bank - Erosion Control',
    category: 'QHSE',
    location: 'Owerri, Imo State, Nigeria.',
    year: '2014',
    value: '$250k',
    scope: 'Procurement and Installation of equipment for erosion control.',
    image: 'https://images.unsplash.com/photo-1767690594466-eba6f79551b9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    status: 'Completed',
  },
  {
    id: 6,
    title: 'Shell - Waste Management',
    category: 'Subsea',
    location: 'Kidney Island, Rivers State',
    year: '2009',
    value: '$1M',
    scope: 'Waste Management',
    image: 'https://images.unsplash.com/photo-1584968329412-cf2026fc7c3d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    status: 'Completed',
  },
];

// In-memory cache populated from Supabase on init
let projectsCache: Project[] = [...defaultProjects];
let initialized = false;
let initPromise: Promise<void> | null = null;

// Event system for cross-component reactivity
const listeners: Set<() => void> = new Set();

function notifyListeners() {
  listeners.forEach((fn) => fn());
}

export function subscribeToProjects(fn: () => void) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

// Initialize from Supabase
export function initProjectsStore(): Promise<void> {
  if (initialized) return Promise.resolve();
  if (initPromise) return initPromise;

  if (!supabase) {
    initialized = true;
    return Promise.resolve();
  }

  initPromise = (async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('id', { ascending: true });

      if (error) {
        console.error('Failed to fetch projects:', error.message);
      }

      if (data && data.length > 0) {
        console.log(`Loaded ${data.length} projects from database`);
        projectsCache = data.map(rowToProject);
        notifyListeners();
      }

      initialized = true;

      // Subscribe to realtime changes
      supabase
        .channel('projects_changes')
        .on(
          'postgres_changes',
          { event: '*', schema: 'public', table: 'projects' },
          async () => {
            const { data: freshData } = await supabase!
              .from('projects')
              .select('*')
              .order('id', { ascending: true });
            if (freshData && freshData.length > 0) {
              projectsCache = freshData.map(rowToProject);
            }
            notifyListeners();
          }
        )
        .subscribe();
    } catch (err) {
      console.error('Failed to init projects store:', err);
      initialized = true;
    }
  })();

  return initPromise;
}

// Kick off init immediately when module loads
initProjectsStore();

export function getAllProjects(): Project[] {
  return [...projectsCache];
}

export function getProjectById(id: number): Project | undefined {
  return projectsCache.find((p) => p.id === id);
}

export async function addProject(project: Omit<Project, 'id'>): Promise<Project> {
  if (!supabase) {
    const maxId = projectsCache.reduce((max, p) => Math.max(max, p.id), 0);
    const newProject: Project = { ...project, id: maxId + 1 };
    projectsCache.unshift(newProject);
    notifyListeners();
    return newProject;
  }

  const row = projectToRow(project);
  const { data, error } = await supabase
    .from('projects')
    .insert(row)
    .select()
    .single();

  if (error) {
    console.error('Failed to add project:', error);
    throw error;
  }

  const newProject = rowToProject(data);
  projectsCache.unshift(newProject);
  notifyListeners();
  return newProject;
}

export async function updateProject(id: number, updates: Partial<Omit<Project, 'id'>>): Promise<Project | null> {
  if (!supabase) {
    const idx = projectsCache.findIndex((p) => p.id === id);
    if (idx === -1) return null;
    projectsCache[idx] = { ...projectsCache[idx], ...updates };
    notifyListeners();
    return projectsCache[idx];
  }

  const dbUpdates: Record<string, unknown> = { ...updates, updated_at: new Date().toISOString() };
  
  const { data, error } = await supabase
    .from('projects')
    .update(dbUpdates)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Failed to update project:', error);
    throw error;
  }

  const updated = rowToProject(data);
  const idx = projectsCache.findIndex((p) => p.id === id);
  if (idx !== -1) projectsCache[idx] = updated;
  notifyListeners();
  return updated;
}

export async function deleteProject(id: number): Promise<boolean> {
  if (!supabase) {
    const filtered = projectsCache.filter((p) => p.id !== id);
    if (filtered.length === projectsCache.length) return false;
    projectsCache = filtered;
    notifyListeners();
    return true;
  }

  const { error } = await supabase
    .from('projects')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Failed to delete project:', error);
    return false;
  }

  projectsCache = projectsCache.filter((p) => p.id !== id);
  notifyListeners();
  return true;
}

export function resetProjectsToDefaults(): void {
  projectsCache = [...defaultProjects];
  notifyListeners();
}
