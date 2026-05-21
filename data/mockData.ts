
import { RegistryEntry, DirectoryEntry } from '../types';

export const MOCK_REGISTRY: RegistryEntry[] = [
  { 
    id: 'C-1004', 
    name: 'Dr. Maxine Okafor DNP, PMHNP, FNP', 
    type: 'MWC-C', 
    status: 'Active', 
    issueDate: '2025-11-13', 
    renewalDate: '2030-11-13', 
    location: 'Houston, USA', 
    language: ['English'], 
    focusAreas: ['Clinical Integration', 'Ethical Boundaries'] 
  },
  { 
    id: 'C-1005', 
    name: 'Ashley Cooper', 
    type: 'MWC-C', 
    status: 'Active', 
    issueDate: '2025-11-13', 
    renewalDate: '2030-11-13', 
    location: 'London, UK', 
    language: ['English'], 
    focusAreas: ['Corporate Resilience', 'Management Wellness'] 
  },
  { 
    id: 'C-1006', 
    name: 'Jean Rhea', 
    type: 'MWC-C', 
    status: 'Active', 
    issueDate: '2025-11-18', 
    renewalDate: '2030-11-13', 
    location: 'New York, USA', 
    language: ['English'], 
    focusAreas: ['Private Practice', 'Non-Clinical Boundaries'] 
  },
  { 
    id: 'C-1007', 
    name: 'Ashley Nava', 
    type: 'MWC-C', 
    status: 'Active', 
    issueDate: '2025-11-18', 
    renewalDate: '2030-11-13', 
    location: 'San Francisco, USA', 
    language: ['English'], 
    focusAreas: ['Professional Advocacy', 'Organization Wellness'] 
  },
  { 
    id: 'C-1008', 
    name: 'Jennifer W. Barnabas', 
    type: 'MWC-C', 
    status: 'Active', 
    issueDate: '2025-11-13', 
    renewalDate: '2030-11-13', 
    location: 'Geneva, Switzerland', 
    language: ['English'], 
    focusAreas: ['Global Health Policy', 'Professional Integrity'] 
  }
];

export const MOCK_DIRECTORY: DirectoryEntry[] = MOCK_REGISTRY.map(r => ({
  ...r,
  inPerson: true,
  remote: true,
}));
