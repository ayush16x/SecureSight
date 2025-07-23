import { Camera, Grid, AlertTriangle, Users, Layers } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { icon: Grid, label: 'Dashboard', active: true },
    { icon: Camera, label: 'Cameras' },
    { icon: Layers, label: 'Scenes' },
    { icon: AlertTriangle, label: 'Incidents' },
    { icon: Users, label: 'Users' }
  ];

  return (
    <nav className="bg-card border-b border-border px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <Camera className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">MANDLACX</span>
          </div>
          
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                  item.active 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span className="text-sm">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-sm font-medium text-primary-foreground">AKG</span>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-foreground">Ayush Kumar Gupta</div>
            <div className="text-xs text-muted-foreground">Ayush@mandlac.com</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;