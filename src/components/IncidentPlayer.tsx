import { Play, Pause, SkipBack, SkipForward, RotateCcw, FastForward } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { cameras } from '@/data/mockData';

interface IncidentPlayerProps {
  currentIncident?: any;
}

const IncidentPlayer = ({ currentIncident }: IncidentPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex-1 p-4 space-y-4">
      {/* Main Video Display */}
      <div className="relative bg-muted rounded-lg overflow-hidden">
        <div className="aspect-video bg-gradient-to-br from-background to-muted flex items-center justify-center">
          <img 
            src="/lovable-uploads/0cb2adf8-3674-4ca7-907e-9ed3b7675d8e.png" 
            alt="Security Camera Feed"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-black/50 px-3 py-1 rounded text-white text-sm font-mono">
            {currentIncident?.camera?.name || 'Camera - 01'}
          </div>
          {currentIncident && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl font-bold text-white/80 tracking-wider">
                MANDATORY
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Camera Thumbnails */}
      <div className="flex space-x-3">
        {cameras.map((camera) => (
          <div 
            key={camera.id}
            className="relative bg-muted rounded overflow-hidden cursor-pointer hover:ring-2 hover:ring-primary transition-all"
          >
            <div className="w-24 h-16 bg-gradient-to-br from-background to-muted flex items-center justify-center">
              <img 
                src="/lovable-uploads/0cb2adf8-3674-4ca7-907e-9ed3b7675d8e.png" 
                alt={camera.name}
                className="w-full h-full object-cover opacity-70"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-2 py-1">
              <div className="text-xs text-white font-mono">{camera.name}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Controls */}
      <div className="bg-card rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-foreground hover:bg-accent"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </Button>
            <Button variant="ghost" size="sm" className="text-foreground hover:bg-accent">
              <SkipBack className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-foreground hover:bg-accent">
              <SkipForward className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-foreground hover:bg-accent">
              <RotateCcw className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-foreground hover:bg-accent">
              <FastForward className="w-4 h-4" />
            </Button>
            <span className="text-sm text-muted-foreground font-mono">
              03:12:37 (15-Jun-2025)
            </span>
          </div>
          <div className="text-sm text-muted-foreground">
            1x
          </div>
        </div>

        {/* Timeline */}
        <div className="w-full">
          <div className="bg-muted h-2 rounded-full relative">
            <div className="bg-primary h-2 rounded-full" style={{ width: '25%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncidentPlayer;