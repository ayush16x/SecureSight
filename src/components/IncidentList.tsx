import { AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { incidents } from '@/data/mockData';
import { incidentTypeConfigs } from '@/types';
import { useState } from 'react';

interface IncidentListProps {
  onIncidentSelect?: (incident: any) => void;
}

const IncidentList = ({ onIncidentSelect }: IncidentListProps) => {
  const [resolvedIncidents, setResolvedIncidents] = useState<Set<string>>(new Set());
  
  const unresolvedIncidents = incidents.filter(incident => 
    !incident.resolved && !resolvedIncidents.has(incident.id)
  );

  const resolvedCount = incidents.filter(incident => 
    incident.resolved || resolvedIncidents.has(incident.id)
  ).length;

  const handleResolve = (incidentId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setResolvedIncidents(prev => new Set([...prev, incidentId]));
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-GB', { 
      hour: '2-digit', 
      minute: '2-digit',
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div className="w-80 bg-card border-l border-border p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <AlertTriangle className="w-5 h-5 text-destructive" />
          <span className="text-lg font-semibold text-foreground">
            {unresolvedIncidents.length} Unresolved Incidents
          </span>
        </div>
        <div className="flex items-center space-x-1 text-success">
          <CheckCircle className="w-4 h-4" />
          <span className="text-sm">{resolvedCount} resolved incidents</span>
        </div>
      </div>

      {/* Incident List */}
      <div className="space-y-3 max-h-[calc(100vh-200px)] overflow-y-auto">
        {unresolvedIncidents.map((incident) => {
          const config = incidentTypeConfigs[incident.type];
          const isOptimisticallyResolved = resolvedIncidents.has(incident.id);
          
          return (
            <Card 
              key={incident.id}
              className={`p-3 cursor-pointer hover:bg-accent/50 transition-all ${
                isOptimisticallyResolved ? 'opacity-50 grayscale' : ''
              }`}
              onClick={() => onIncidentSelect?.(incident)}
            >
              <div className="flex space-x-3">
                <div className="w-16 h-12 bg-muted rounded overflow-hidden flex-shrink-0">
                  <img 
                    src={incident.thumbnailUrl} 
                    alt="Incident thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className={`px-2 py-1 rounded text-xs font-medium ${config.bgColor} ${config.color}`}>
                      {config.icon} {incident.type}
                    </div>
                  </div>
                  
                  <div className="text-sm text-muted-foreground mb-1">
                    📍 {incident.camera?.location}
                  </div>
                  
                  <div className="flex items-center text-xs text-muted-foreground space-x-2">
                    <Clock className="w-3 h-3" />
                    <span>{formatTime(incident.tsStart)} - {formatTime(incident.tsEnd)}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end mt-2">
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={(e) => handleResolve(incident.id, e)}
                  disabled={isOptimisticallyResolved}
                  className="text-xs"
                >
                  {isOptimisticallyResolved ? 'Resolved' : 'Resolve →'}
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default IncidentList;