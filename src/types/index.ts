export interface Camera {
  id: string;
  name: string;
  location: string;
}

export interface Incident {
  id: string;
  cameraId: string;
  camera?: Camera;
  type: 'Unauthorised Access' | 'Gun Threat' | 'Face Recognised' | 'Traffic Congestion' | 'Multiple Events';
  tsStart: string;
  tsEnd: string;
  thumbnailUrl: string;
  resolved: boolean;
}

export interface IncidentTypeConfig {
  color: string;
  bgColor: string;
  icon: string;
}

export const incidentTypeConfigs: Record<string, IncidentTypeConfig> = {
  'Unauthorised Access': {
    color: 'text-warning',
    bgColor: 'bg-warning/20',
    icon: '🚨'
  },
  'Gun Threat': {
    color: 'text-destructive',
    bgColor: 'bg-destructive/20',
    icon: '🔫'
  },
  'Face Recognised': {
    color: 'text-primary',
    bgColor: 'bg-primary/20',
    icon: '👤'
  },
  'Traffic Congestion': {
    color: 'text-success',
    bgColor: 'bg-success/20',
    icon: '🚗'
  },
  'Multiple Events': {
    color: 'text-muted-foreground',
    bgColor: 'bg-muted/20',
    icon: '⚠️'
  }
};