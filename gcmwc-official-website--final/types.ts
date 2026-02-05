
export type CredentialStatus = 'Active' | 'Lapsed' | 'Suspended' | 'Revoked';
export type CredentialType = 'MWC-T' | 'MWC-C';

export interface RegistryEntry {
  id: string;
  name: string;
  type: CredentialType;
  status: CredentialStatus;
  issueDate: string;
  renewalDate: string;
  location: string;
  language: string[];
  focusAreas: string[];
  disciplinaryNote?: string;
}

export interface DirectoryEntry extends RegistryEntry {
  inPerson: boolean;
  remote: boolean;
}
