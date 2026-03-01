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

const defaultProjects: Project[] = [
  {
    id: 1,
    title: 'Offshore Platform Upgrade',
    category: 'Offshore',
    location: 'Niger Delta, Nigeria',
    year: '2023',
    value: '$45M',
    scope: 'Complete process facilities upgrade including separation systems, compression units, and utility modules.',
    image: 'https://images.unsplash.com/photo-1578670812003-60745e2c2ea9?w=800&q=80',
    status: 'Completed',
  },
  {
    id: 2,
    title: 'Pipeline Installation Project',
    category: 'Pipeline',
    location: 'Gulf of Guinea',
    year: '2022',
    value: '$32M',
    scope: '85km subsea pipeline installation from offshore platform to shore terminal.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
    status: 'Completed',
  },
  {
    id: 3,
    title: 'Gas Processing Facility',
    category: 'Processing',
    location: 'Port Harcourt, Nigeria',
    year: '2023',
    value: '$68M',
    scope: 'EPCI delivery of 150 MMscfd gas processing facility with LPG recovery and export systems.',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80',
    status: 'Completed',
  },
  {
    id: 4,
    title: 'FPSO Topside Fabrication',
    category: 'Offshore',
    location: 'Onne, Rivers State',
    year: '2021',
    value: '$92M',
    scope: 'Fabrication and integration of 12,000-ton topside modules for FPSO conversion.',
    image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80',
    status: 'Completed',
  },
  {
    id: 5,
    title: 'Tank Farm Construction',
    category: 'Storage',
    location: 'Lagos, Nigeria',
    year: '2022',
    value: '$28M',
    scope: 'Construction of 150,000 bbl crude storage tank farm including foundations, tanks, and piping.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80',
    status: 'Completed',
  },
  {
    id: 6,
    title: 'Subsea Manifold Installation',
    category: 'Subsea',
    location: 'Offshore Nigeria',
    year: '2023',
    value: '$54M',
    scope: 'Installation of 4-slot subsea production manifold at 1,200m water depth.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    status: 'Ongoing',
  },
];

// Initialize store with defaults if empty
function initializeStore(): Project[] {
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
