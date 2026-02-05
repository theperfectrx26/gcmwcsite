
import { RegistryEntry, DirectoryEntry } from '../types';
import { MOCK_REGISTRY, MOCK_DIRECTORY } from '../data/mockData';

// Safe environment variable check for browser ESM environments
const getWpUrl = () => {
  try {
    return (import.meta as any).env?.VITE_WP_URL || null;
  } catch (e) {
    return null;
  }
};

const WP_URL = getWpUrl();

export async function getRegistry(): Promise<RegistryEntry[]> {
  if (!WP_URL) {
    return MOCK_REGISTRY;
  }

  try {
    const response = await fetch(`${WP_URL}/wp-json/wp/v2/registry?_embed&per_page=100`);
    if (!response.ok) throw new Error('WP Fetch Failed');
    const data = await response.json();

    return data.map((post: any) => ({
      id: post.acf?.credential_id || `W-${post.id}`,
      name: post.title.rendered,
      type: post.acf?.credential_type || 'MWC-C',
      status: post.acf?.status || 'Active',
      issueDate: post.acf?.issue_date || post.date,
      renewalDate: post.acf?.renewal_date || '',
      location: post.acf?.location || 'Unlisted',
      language: post.acf?.languages ? post.acf.languages.split(',') : ['English'],
      focusAreas: post.acf?.focus_areas ? post.acf.focus_areas.split(',') : [],
      disciplinaryNote: post.acf?.disciplinary_note || undefined,
    }));
  } catch (error) {
    console.error('WordPress integration error, providing fallback data:', error);
    return MOCK_REGISTRY;
  }
}

export async function getDirectory(): Promise<DirectoryEntry[]> {
  const registry = await getRegistry();
  return registry.map(entry => ({
    ...entry,
    inPerson: true,
    remote: true,
  }));
}
