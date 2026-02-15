
import { RegistryEntry, DirectoryEntry } from '../types';

export const MOCK_REGISTRY: RegistryEntry[] = [
  { 
    id: 'C-1001', 
    name: 'Dr. Sarah Mitchell', 
    type: 'MWC-C', 
    status: 'Active', 
    issueDate: '2025-01-15', 
    renewalDate: '2027-01-15', 
    location: 'London, UK', 
    language: ['English'], 
    focusAreas: ['Stress Management', 'Self-Awareness'] 
  },
  { 
    id: 'T-2001', 
    name: 'James Wilson', 
    type: 'MWC-T', 
    status: 'Active', 
    issueDate: '2025-02-01', 
    renewalDate: '2027-02-01', 
    location: 'New York, USA', 
    language: ['English'], 
    focusAreas: ['Student Support', 'Resilience'] 
  },
  { 
    id: 'C-1002', 
    name: 'Elena Rodriguez', 
    type: 'MWC-C', 
    status: 'Active', 
    issueDate: '2025-01-10', 
    renewalDate: '2027-01-10', 
    location: 'Madrid, Spain', 
    language: ['Spanish', 'English'], 
    focusAreas: ['Emotional Regulation', 'Goal Planning'] 
  },
  { 
    id: 'C-1003', 
    name: 'Amara Okafor', 
    type: 'MWC-C', 
    status: 'Active', 
    issueDate: '2025-03-05', 
    renewalDate: '2027-03-05', 
    location: 'Lagos, Nigeria', 
    language: ['English', 'Igbo'], 
    focusAreas: ['Identity Development', 'Purpose Alignment'] 
  }
];

export const MOCK_DIRECTORY: DirectoryEntry[] = MOCK_REGISTRY.map(r => ({
  ...r,
  inPerson: true,
  remote: true,
}));
