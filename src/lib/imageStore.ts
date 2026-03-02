// Centralized image store — uses Supabase as source of truth so all changes
// are immediately visible to every visitor, not just the browser that made them.

import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

let supabase: SupabaseClient | null = null;

try {
  if (supabaseUrl && supabaseAnonKey) {
    supabase = createClient(supabaseUrl, supabaseAnonKey);
  } else {
    console.warn('Supabase credentials not found. Images will use defaults.');
  }
} catch (err) {
  console.error('Failed to create Supabase client:', err);
}

export interface SiteImage {
  key: string;
  label: string;
  url: string;
  section: string;
  page: string;
}

export type PageImageConfig = {
  page: string;
  label: string;
  sections: {
    section: string;
    label: string;
    images: {
      key: string;
      label: string;
      defaultUrl: string;
    }[];
  }[];
};

// Default images used across the site
const defaultImages: Record<string, string> = {
  // HOME PAGE
  'home-hero-bg': 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&q=80',
  'home-cta-banner-bg': 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80',
  'home-cta-bg': 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80',
  'home-mission-vision': 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80',
  'home-service-engineering': 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
  'home-service-procurement': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
  'home-service-construction': 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
  'home-service-marine': 'https://images.unsplash.com/photo-1578670812003-60745e2c2ea9?w=800&q=80',
  'home-product-1': 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80',
  'home-product-2': 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80',
  'home-product-3': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
  'home-product-4': 'https://images.unsplash.com/photo-1578670812003-60745e2c2ea9?w=600&q=80',
  'home-product-5': 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80',
  'home-product-6': 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80',
  'home-product-7': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
  'home-product-8': 'https://images.unsplash.com/photo-1578670812003-60745e2c2ea9?w=600&q=80',
  'home-about-1': 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80',
  'home-about-2': 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80',
  'home-testimonial-1': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  'home-testimonial-2': 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
  'home-testimonial-3': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',

  // ABOUT PAGE
  'about-hero': 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
  'about-story-1': 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80',
  'about-story-2': 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80',
  'about-story-3': 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80',
  'about-story-4': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
  'about-capabilities-main': 'https://images.unsplash.com/photo-1578670812003-60745e2c2ea9?w=800&q=80',
  'about-capabilities-left': 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80',
  'about-capabilities-right': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
  'about-certifications': 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
  'about-local-content': 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
  'about-hse': 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',

  // SERVICES PAGE (Engineering)
  'services-eng-hero': 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
  'services-eng-process': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
  'services-eng-structural': 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
  'services-eng-electrical': 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',

  // SERVICES OVERVIEW PAGE
  'services-overview-why-choose': 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',

  // SERVICES PAGES (Procurement, Construction, Marine, Dredging, Waste Management)
  'services-procurement-hero': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
  'services-procurement-supply': 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
  'services-procurement-vendor': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
  'services-construction-hero': 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
  'services-construction-installation': 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
  'services-construction-project': 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
  'services-construction-advantage': 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
  'services-marine-hero': 'https://images.unsplash.com/photo-1578670812003-60745e2c2ea9?w=800&q=80',
  'services-marine-installation': 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&q=80',
  'services-marine-maintenance': 'https://images.unsplash.com/photo-1578670812003-60745e2c2ea9?w=800&q=80',
  'services-marine-fleet-main': 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&q=80',
  'services-marine-fleet-left': 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&q=80',
  'services-marine-fleet-right': 'https://images.unsplash.com/photo-1578670812003-60745e2c2ea9?w=600&q=80',
  'services-dredging-hero': 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
  'services-dredging-environmental': 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
  'services-dredging-sediment': 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
  'services-waste-hero': 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
  'services-waste-treatment': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
  'services-waste-disposal': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
  'services-waste-hse': 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',

  // PRODUCTS PAGES (Industrial Equipment, Marine Equipment, Safety Systems)
  'products-industrial-hero': 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
  'products-industrial-pumps': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
  'products-industrial-compressors': 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
  'products-industrial-tanks': 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
  'products-marine-hero': 'https://images.unsplash.com/photo-1578670812003-60745e2c2ea9?w=800&q=80',
  'products-marine-subsea': 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&q=80',
  'products-marine-topside': 'https://images.unsplash.com/photo-1578670812003-60745e2c2ea9?w=800&q=80',
  'products-marine-pipelines': 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80',
  'products-marine-compliance': 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&q=80',
  'products-safety-hero': 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
  'products-safety-personal': 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
  'products-safety-fire': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
  'products-safety-monitoring': 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
  'products-safety-compliance': 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',

  // CONTACT PAGE
  'contact-hero': 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',

  // PARTNERS LOGOS
  'partner-shell': '/shell-logo.png',
  'partner-chevron': '/chevron-logo.png',
  'partner-nnpc': '/nnpc-logo.jpg',
  'partner-seplat': '/seplat-logo.jpg',
  'partner-agip': '/agip-logo.jpg',
  'partner-heritage': '/heritage-logo.jpg',
  'partner-oando': '/oando-logo.jpg',
  'partner-addax': '/addax-logo.png',
  'partner-renaissance': '/renaissance-logo.png',
};

// In-memory cache populated from Supabase on init, updated in real-time
const imageCache: Record<string, string> = { ...defaultImages };

// Listeners for React hooks
type ImageListener = (key: string, url: string) => void;
const listeners = new Set<ImageListener>();

function notifyListeners(key: string, url: string) {
  listeners.forEach((fn) => fn(key, url));
}

export function subscribeToImages(fn: ImageListener) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

// Load all overrides from Supabase on startup and subscribe to real-time updates
let initialized = false;
let initPromise: Promise<void> | null = null;

export function initImageStore(): Promise<void> {
  if (initialized) return Promise.resolve();
  if (initPromise) return initPromise;

  if (!supabase) {
    initialized = true;
    return Promise.resolve();
  }

  initPromise = (async () => {
    try {
      const { data, error } = await supabase
        .from('site_images')
        .select('key, url');

      if (error) {
        console.error('Failed to fetch site images:', error.message);
      }

      if (data && data.length > 0) {
        console.log(`Loaded ${data.length} image overrides from database`);
        data.forEach(({ key, url }: { key: string; url: string }) => {
          if (url) {
            imageCache[key] = url;
          }
        });
        // Notify all listeners that images have been loaded
        notifyListeners('all', '');
      }

      initialized = true;

      // Subscribe to realtime changes
      supabase
        .channel('site_images_changes')
        .on(
          'postgres_changes',
          { event: '*', schema: 'public', table: 'site_images' },
          (payload) => {
            if (payload.eventType === 'DELETE') {
              const key = (payload.old as { key: string }).key;
              imageCache[key] = defaultImages[key] || '';
              notifyListeners(key, imageCache[key]);
            } else {
              const { key, url } = payload.new as { key: string; url: string };
              if (url) {
                imageCache[key] = url;
                notifyListeners(key, url);
              }
            }
          }
        )
        .subscribe();
    } catch (err) {
      console.error('Failed to init image store:', err);
      initialized = true; // Mark as initialized even on error to not block the app
    }
  })();

  return initPromise;
}

// Kick off init immediately when module loads
initImageStore();

// Get image URL by key
export function getImage(key: string): string {
  return imageCache[key] || defaultImages[key] || '';
}

// Set image URL via Supabase (from a URL string)
export async function setImage(key: string, url: string): Promise<void> {
  // Optimistic local update
  imageCache[key] = url;
  notifyListeners(key, url);

  if (!supabase) {
    console.warn('Supabase not available, image saved locally only');
    return;
  }

  const { error } = await supabase
    .from('site_images')
    .upsert({ key, url, updated_at: new Date().toISOString() });

  if (error) {
    console.error('Failed to save image:', error);
    throw error;
  }
}

// Upload a file to Supabase Storage via edge function and persist the public URL
export async function uploadImage(key: string, file: File): Promise<string> {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase credentials not configured');
  }

  const formData = new FormData();
  formData.append('file', file);
  formData.append('key', key);

  const res = await fetch(
    `${supabaseUrl}/functions/v1/supabase-functions-upload-site-image`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${supabaseAnonKey}`,
        apikey: supabaseAnonKey,
      },
      body: formData,
    }
  );

  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: 'Unknown error' }));
    throw new Error(err.error || 'Upload failed');
  }

  const { url } = await res.json();

  // Optimistic local update (realtime will also fire shortly after)
  imageCache[key] = url;
  notifyListeners(key, url);

  return url;
}

// Reset a single image to its default
export async function resetImage(key: string): Promise<void> {
  imageCache[key] = defaultImages[key] || '';
  notifyListeners(key, imageCache[key]);
  if (supabase) {
    await supabase.from('site_images').delete().eq('key', key);
  }
}

// Reset all images to defaults
export async function resetAllImages(): Promise<void> {
  Object.keys(defaultImages).forEach((key) => {
    imageCache[key] = defaultImages[key];
  });
  notifyListeners('all', '');
  if (supabase) {
    await supabase.from('site_images').delete().neq('key', '');
  }
}

// Get all images (from cache)
export function getAllImages(): Record<string, string> {
  const result: Record<string, string> = {};
  for (const key of Object.keys(defaultImages)) {
    result[key] = imageCache[key] || defaultImages[key];
  }
  return result;
}

// Check if an image has been customized (differs from default)
export function isImageCustomized(key: string): boolean {
  return imageCache[key] !== undefined && imageCache[key] !== defaultImages[key];
}

// Get default image URL
export function getDefaultImage(key: string): string {
  return defaultImages[key] || '';
}

// Page configurations for the CMS
export const pageImageConfigs: PageImageConfig[] = [
  {
    page: 'home',
    label: 'Home Page',
    sections: [
      {
        section: 'hero',
        label: 'Hero Section',
        images: [
          { key: 'home-hero-bg', label: 'Hero Background', defaultUrl: defaultImages['home-hero-bg'] },
        ],
      },
      {
        section: 'about',
        label: 'About Section',
        images: [
          { key: 'home-about-1', label: 'About Image 1 (Left)', defaultUrl: defaultImages['home-about-1'] },
          { key: 'home-about-2', label: 'About Image 2 (Right)', defaultUrl: defaultImages['home-about-2'] },
        ],
      },
      {
        section: 'services',
        label: 'Services Section',
        images: [
          { key: 'home-service-engineering', label: 'Engineering Services', defaultUrl: defaultImages['home-service-engineering'] },
          { key: 'home-service-procurement', label: 'Procurement', defaultUrl: defaultImages['home-service-procurement'] },
          { key: 'home-service-construction', label: 'Construction & Installation', defaultUrl: defaultImages['home-service-construction'] },
          { key: 'home-service-marine', label: 'Marine & Offshore', defaultUrl: defaultImages['home-service-marine'] },
        ],
      },
      {
        section: 'mission',
        label: 'Mission Section',
        images: [
          { key: 'home-mission-vision', label: 'Vision Card Image', defaultUrl: defaultImages['home-mission-vision'] },
        ],
      },
      {
        section: 'products',
        label: 'Products Carousel',
        images: [
          { key: 'home-product-1', label: 'Pumps & Compressors', defaultUrl: defaultImages['home-product-1'] },
          { key: 'home-product-2', label: 'Storage Tanks', defaultUrl: defaultImages['home-product-2'] },
          { key: 'home-product-3', label: 'Instrumentation', defaultUrl: defaultImages['home-product-3'] },
          { key: 'home-product-4', label: 'Safety Equipment', defaultUrl: defaultImages['home-product-4'] },
          { key: 'home-product-5', label: 'Marine Equipment', defaultUrl: defaultImages['home-product-5'] },
          { key: 'home-product-6', label: 'Process Equipment', defaultUrl: defaultImages['home-product-6'] },
          { key: 'home-product-7', label: 'Control Systems', defaultUrl: defaultImages['home-product-7'] },
          { key: 'home-product-8', label: 'Pipeline Systems', defaultUrl: defaultImages['home-product-8'] },
        ],
      },
      {
        section: 'testimonials',
        label: 'Testimonials',
        images: [
          { key: 'home-testimonial-1', label: 'John Adeyemi', defaultUrl: defaultImages['home-testimonial-1'] },
          { key: 'home-testimonial-2', label: 'Sarah Okonkwo', defaultUrl: defaultImages['home-testimonial-2'] },
          { key: 'home-testimonial-3', label: 'Michael Chen', defaultUrl: defaultImages['home-testimonial-3'] },
        ],
      },
      {
        section: 'cta',
        label: 'CTA Sections',
        images: [
          { key: 'home-cta-banner-bg', label: 'CTA Banner Background', defaultUrl: defaultImages['home-cta-banner-bg'] },
          { key: 'home-cta-bg', label: 'Bottom CTA Background', defaultUrl: defaultImages['home-cta-bg'] },
        ],
      },
    ],
  },
  {
    page: 'about',
    label: 'About Page',
    sections: [
      {
        section: 'hero',
        label: 'Hero Section',
        images: [
          { key: 'about-hero', label: 'Hero Image', defaultUrl: defaultImages['about-hero'] },
        ],
      },
      {
        section: 'story',
        label: 'Our Story Gallery',
        images: [
          { key: 'about-story-1', label: 'Story Image 1 (Top Left)', defaultUrl: defaultImages['about-story-1'] },
          { key: 'about-story-2', label: 'Story Image 2 (Top Right)', defaultUrl: defaultImages['about-story-2'] },
          { key: 'about-story-3', label: 'Story Image 3 (Bottom Left)', defaultUrl: defaultImages['about-story-3'] },
          { key: 'about-story-4', label: 'Story Image 4 (Bottom Right)', defaultUrl: defaultImages['about-story-4'] },
        ],
      },
      {
        section: 'capabilities',
        label: 'Capabilities Section',
        images: [
          { key: 'about-capabilities-main', label: 'Offshore Platform (Main)', defaultUrl: defaultImages['about-capabilities-main'] },
          { key: 'about-capabilities-left', label: 'Pipeline Construction (Bottom Left)', defaultUrl: defaultImages['about-capabilities-left'] },
          { key: 'about-capabilities-right', label: 'Fabrication Yard (Bottom Right)', defaultUrl: defaultImages['about-capabilities-right'] },
        ],
      },
      {
        section: 'certifications',
        label: 'Certifications Section',
        images: [
          { key: 'about-certifications', label: 'Quality Standards Image', defaultUrl: defaultImages['about-certifications'] },
        ],
      },
      {
        section: 'local-content',
        label: 'Local Content Section',
        images: [
          { key: 'about-local-content', label: 'Local Workforce Image', defaultUrl: defaultImages['about-local-content'] },
        ],
      },
      {
        section: 'hse',
        label: 'HSE Section',
        images: [
          { key: 'about-hse', label: 'Safety Operations Image', defaultUrl: defaultImages['about-hse'] },
        ],
      },
    ],
  },
  {
    page: 'services',
    label: 'Services Pages',
    sections: [
      {
        section: 'overview',
        label: 'Services Overview Page',
        images: [
          { key: 'services-overview-why-choose', label: 'Why Choose GIC Image', defaultUrl: defaultImages['services-overview-why-choose'] },
        ],
      },
      {
        section: 'engineering',
        label: 'Engineering Services',
        images: [
          { key: 'services-eng-hero', label: 'Hero Image', defaultUrl: defaultImages['services-eng-hero'] },
          { key: 'services-eng-process', label: 'Process Engineering', defaultUrl: defaultImages['services-eng-process'] },
          { key: 'services-eng-structural', label: 'Structural Engineering', defaultUrl: defaultImages['services-eng-structural'] },
          { key: 'services-eng-electrical', label: 'Electrical & Instrumentation', defaultUrl: defaultImages['services-eng-electrical'] },
        ],
      },
      {
        section: 'procurement',
        label: 'Procurement Services',
        images: [
          { key: 'services-procurement-hero', label: 'Hero Image', defaultUrl: defaultImages['services-procurement-hero'] },
          { key: 'services-procurement-supply', label: 'Supply Chain', defaultUrl: defaultImages['services-procurement-supply'] },
          { key: 'services-procurement-vendor', label: 'Vendor Management', defaultUrl: defaultImages['services-procurement-vendor'] },
        ],
      },
      {
        section: 'construction',
        label: 'Construction & Installation',
        images: [
          { key: 'services-construction-hero', label: 'Hero Image', defaultUrl: defaultImages['services-construction-hero'] },
          { key: 'services-construction-installation', label: 'Installation Services', defaultUrl: defaultImages['services-construction-installation'] },
          { key: 'services-construction-project', label: 'Project Execution', defaultUrl: defaultImages['services-construction-project'] },
          { key: 'services-construction-advantage', label: 'Construction Advantage Image', defaultUrl: defaultImages['services-construction-advantage'] },
        ],
      },
      {
        section: 'marine',
        label: 'Marine & Offshore',
        images: [
          { key: 'services-marine-hero', label: 'Hero Image', defaultUrl: defaultImages['services-marine-hero'] },
          { key: 'services-marine-installation', label: 'Installation', defaultUrl: defaultImages['services-marine-installation'] },
          { key: 'services-marine-maintenance', label: 'Maintenance & Support', defaultUrl: defaultImages['services-marine-maintenance'] },
          { key: 'services-marine-fleet-main', label: 'Fleet Main Image', defaultUrl: defaultImages['services-marine-fleet-main'] },
          { key: 'services-marine-fleet-left', label: 'Fleet Bottom Left', defaultUrl: defaultImages['services-marine-fleet-left'] },
          { key: 'services-marine-fleet-right', label: 'Fleet Bottom Right', defaultUrl: defaultImages['services-marine-fleet-right'] },
        ],
      },
      {
        section: 'dredging',
        label: 'Dredging Services',
        images: [
          { key: 'services-dredging-hero', label: 'Hero Image', defaultUrl: defaultImages['services-dredging-hero'] },
          { key: 'services-dredging-environmental', label: 'Environmental Management', defaultUrl: defaultImages['services-dredging-environmental'] },
          { key: 'services-dredging-sediment', label: 'Sediment Handling', defaultUrl: defaultImages['services-dredging-sediment'] },
        ],
      },
      {
        section: 'waste',
        label: 'Waste Management',
        images: [
          { key: 'services-waste-hero', label: 'Hero Image', defaultUrl: defaultImages['services-waste-hero'] },
          { key: 'services-waste-treatment', label: 'Treatment', defaultUrl: defaultImages['services-waste-treatment'] },
          { key: 'services-waste-disposal', label: 'Disposal', defaultUrl: defaultImages['services-waste-disposal'] },
          { key: 'services-waste-hse', label: 'HSE Commitment Image', defaultUrl: defaultImages['services-waste-hse'] },
        ],
      },
    ],
  },
  {
    page: 'products',
    label: 'Products Pages',
    sections: [
      {
        section: 'industrial',
        label: 'Industrial Equipment',
        images: [
          { key: 'products-industrial-hero', label: 'Hero Image', defaultUrl: defaultImages['products-industrial-hero'] },
          { key: 'products-industrial-pumps', label: 'Pumps & Compressors', defaultUrl: defaultImages['products-industrial-pumps'] },
          { key: 'products-industrial-compressors', label: 'Compression Systems', defaultUrl: defaultImages['products-industrial-compressors'] },
          { key: 'products-industrial-tanks', label: 'Storage Tanks', defaultUrl: defaultImages['products-industrial-tanks'] },
        ],
      },
      {
        section: 'marine',
        label: 'Marine Equipment',
        images: [
          { key: 'products-marine-hero', label: 'Hero Image', defaultUrl: defaultImages['products-marine-hero'] },
          { key: 'products-marine-subsea', label: 'Subsea Equipment', defaultUrl: defaultImages['products-marine-subsea'] },
          { key: 'products-marine-topside', label: 'Topside Systems', defaultUrl: defaultImages['products-marine-topside'] },
          { key: 'products-marine-pipelines', label: 'Pipeline Systems', defaultUrl: defaultImages['products-marine-pipelines'] },
          { key: 'products-marine-compliance', label: 'Compliance Section Image', defaultUrl: defaultImages['products-marine-compliance'] },
        ],
      },
      {
        section: 'safety',
        label: 'Safety Systems',
        images: [
          { key: 'products-safety-hero', label: 'Hero Image', defaultUrl: defaultImages['products-safety-hero'] },
          { key: 'products-safety-personal', label: 'Personal Protective Equipment', defaultUrl: defaultImages['products-safety-personal'] },
          { key: 'products-safety-fire', label: 'Fire & Emergency Systems', defaultUrl: defaultImages['products-safety-fire'] },
          { key: 'products-safety-monitoring', label: 'Monitoring & Detection', defaultUrl: defaultImages['products-safety-monitoring'] },
          { key: 'products-safety-compliance', label: 'Compliance Section Image', defaultUrl: defaultImages['products-safety-compliance'] },
        ],
      },
    ],
  },
  {
    page: 'partners',
    label: 'Partner Logos',
    sections: [
      {
        section: 'logos',
        label: 'Client Logos',
        images: [
          { key: 'partner-shell', label: 'Shell Logo', defaultUrl: defaultImages['partner-shell'] },
          { key: 'partner-chevron', label: 'Chevron Logo', defaultUrl: defaultImages['partner-chevron'] },
          { key: 'partner-nnpc', label: 'NNPC Logo', defaultUrl: defaultImages['partner-nnpc'] },
          { key: 'partner-seplat', label: 'Seplat Logo', defaultUrl: defaultImages['partner-seplat'] },
          { key: 'partner-agip', label: 'Agip Logo', defaultUrl: defaultImages['partner-agip'] },
          { key: 'partner-heritage', label: 'Heritage Oil Logo', defaultUrl: defaultImages['partner-heritage'] },
          { key: 'partner-oando', label: 'Oando Logo', defaultUrl: defaultImages['partner-oando'] },
          { key: 'partner-addax', label: 'Addax Petroleum Logo', defaultUrl: defaultImages['partner-addax'] },
          { key: 'partner-renaissance', label: 'Renaissance Logo', defaultUrl: defaultImages['partner-renaissance'] },
        ],
      },
    ],
  },
  {
    page: 'contact',
    label: 'Contact Page',
    sections: [
      {
        section: 'hero',
        label: 'Hero Section',
        images: [
          { key: 'contact-hero', label: 'Contact Hero Image', defaultUrl: defaultImages['contact-hero'] },
        ],
      },
    ],
  },
];
