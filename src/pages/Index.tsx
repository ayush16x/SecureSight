import { useState } from 'react';
import Navbar from '@/components/Navbar';
import IncidentPlayer from '@/components/IncidentPlayer';
import IncidentList from '@/components/IncidentList';
import IncidentTimeline from '@/components/IncidentTimeline';

const Index = () => {
  const [selectedIncident, setSelectedIncident] = useState(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="flex h-[calc(100vh-64px)]">
        <IncidentPlayer currentIncident={selectedIncident} />
        <IncidentList onIncidentSelect={setSelectedIncident} />
      </div>
      
      <IncidentTimeline />
    </div>
  );
};

export default Index;
