export interface Project {
  id: string;
  name: string;
  city?: string;
  startDate?: Date;
  endDate?: Date;
  createdAt: Date;
  updatedAt: Date;
  buildings: Building[];
}

export interface Building {
  id: string;
  projectId: string;
  name: string;
  description?: string;
  createdAt: Date;
  functionalZones: FunctionalZone[];
}

export interface FunctionalZone {
  id: string;
  buildingId: string;
  name: string;
  description?: string;
  createdAt: Date;
  shutters: Shutter[];
}

export interface Shutter {
  id: string;
  zoneId: string;
  name: string;
  type: 'high' | 'low'; // Volet Haut ou Bas
  referenceFlow: number; // Débit de référence
  measuredFlow: number; // Débit mesuré
  remarks?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ComplianceResult {
  deviation: number; // Écart en pourcentage
  status: 'compliant' | 'acceptable' | 'non-compliant';
  color: string;
  label: string;
}

export type ShutterType = 'high' | 'low';
export type ComplianceStatus = 'compliant' | 'acceptable' | 'non-compliant';

// Search result interface
export interface SearchResult {
  shutter: Shutter;
  zone: FunctionalZone;
  building: Building;
  project: Project;
}