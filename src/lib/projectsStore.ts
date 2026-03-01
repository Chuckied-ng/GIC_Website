// Projects data store with localStorage persistence

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

const STORAGE_KEY = 'gic_projects';
const STORAGE_VERSION = 'v2';
const VERSION_KEY = 'gic_projects_version';

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

// Initialize store with defaults if empty or version mismatch
function initializeStore(): Project[] {
  const storedVersion = localStorage.getItem(VERSION_KEY);
  if (storedVersion !== STORAGE_VERSION) {
    // New deployment - reset to latest defaults
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProjects));
    localStorage.setItem(VERSION_KEY, STORAGE_VERSION);
    return defaultProjects;
  }
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProjects));
    return defaultProjects;
  }
  try {
    return JSON.parse(stored);
  } catch {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProjects));
    return defaultProjects;
  }
}

// Event system for cross-component reactivity
const listeners: Set<() => void> = new Set();

function notifyListeners() {
  listeners.forEach((fn) => fn());
}

export function subscribeToProjects(fn: () => void) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function getAllProjects(): Project[] {
  return initializeStore();
}

export function getProjectById(id: number): Project | undefined {
  const projects = initializeStore();
  return projects.find((p) => p.id === id);
}

export function addProject(project: Omit<Project, 'id'>): Project {
  const projects = initializeStore();
  const maxId = projects.reduce((max, p) => Math.max(max, p.id), 0);
  const newProject: Project = { ...project, id: maxId + 1 };
  projects.unshift(newProject);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  notifyListeners();
  return newProject;
}

export function updateProject(id: number, updates: Partial<Omit<Project, 'id'>>): Project | null {
  const projects = initializeStore();
  const idx = projects.findIndex((p) => p.id === id);
  if (idx === -1) return null;
  projects[idx] = { ...projects[idx], ...updates };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  notifyListeners();
  return projects[idx];
}

export function deleteProject(id: number): boolean {
  const projects = initializeStore();
  const filtered = projects.filter((p) => p.id !== id);
  if (filtered.length === projects.length) return false;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  notifyListeners();
  return true;
}

export function resetProjectsToDefaults(): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProjects));
  notifyListeners();
}
