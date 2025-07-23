import { useState } from 'react';
import { cameras, incidents } from '@/data/mockData';
import { incidentTypeConfigs } from '@/types';

const IncidentTimeline = () => {
  const [selectedCamera, setSelectedCamera] = useState<string | null>(null);

  // Generate hourly timeline
  const hours = Array.from({ length: 24 }, (_, i) => {
    const hour = String(i).padStart(2, '0');
    return `${hour}:00`;
  });

  const getIncidentsForCamera = (cameraId: string) => {
    return incidents.filter(incident => incident.cameraId === cameraId);
  };

  const getIncidentPosition = (timestamp: string) => {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return ((hours * 60 + minutes) / (24 * 60)) * 100;
  };

  return (
    <div className="bg-card border-t border-border p-4">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground mb-2">Camera List</h3>
        
        {/* Timeline Header */}
        <div className="flex items-center mb-4">
          <div className="w-32 text-sm text-muted-foreground">Camera</div>
          <div className="flex-1 relative">
            <div className="flex justify-between text-xs text-muted-foreground mb-2">
              {hours.filter((_, i) => i % 2 === 0).map(hour => (
                <span key={hour}>{hour}</span>
              ))}
            </div>
            <div className="h-px bg-border"></div>
          </div>
        </div>

        {/* Camera Rows */}
        <div className="space-y-3">
          {cameras.map((camera) => {
            const cameraIncidents = getIncidentsForCamera(camera.id);
            
            return (
              <div 
                key={camera.id}
                className={`flex items-center group hover:bg-accent/30 p-2 rounded ${
                  selectedCamera === camera.id ? 'bg-accent/50' : ''
                }`}
                onClick={() => setSelectedCamera(selectedCamera === camera.id ? null : camera.id)}
              >
                <div className="w-28 flex items-center space-x-2 cursor-pointer">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-foreground">{camera.name}</span>
                </div>
                
                <div className="flex-1 relative h-8">
                  {/* Timeline Background */}
                  <div className="absolute inset-y-3 left-0 right-0 bg-muted/50 rounded"></div>
                  
                  {/* Incident Markers */}
                  {cameraIncidents.map((incident) => {
                    const config = incidentTypeConfigs[incident.type];
                    const position = getIncidentPosition(incident.tsStart);
                    
                    return (
                      <div
                        key={incident.id}
                        className={`absolute top-1 h-6 w-3 rounded-sm cursor-pointer transition-all hover:scale-110 ${config.bgColor} ${config.color}`}
                        style={{ left: `${position}%` }}
                        title={`${incident.type} - ${new Date(incident.tsStart).toLocaleTimeString()}`}
                      >
                        <div className="w-full h-full flex items-center justify-center text-xs">
                          {config.icon}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex flex-wrap gap-4 text-xs">
            {Object.entries(incidentTypeConfigs).map(([type, config]) => (
              <div key={type} className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded ${config.bgColor} flex items-center justify-center`}>
                  <span className="text-xs">{config.icon}</span>
                </div>
                <span className="text-muted-foreground">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncidentTimeline;