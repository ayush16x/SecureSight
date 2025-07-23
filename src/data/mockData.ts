import { Camera, Incident } from '@/types';

export const cameras: Camera[] = [
  { id: '01', name: 'Camera - 01', location: 'Shop Floor Camera A' },
  { id: '02', name: 'Camera - 02', location: 'Vault Entrance' },
  { id: '03', name: 'Camera - 03', location: 'Main Entrance' }
];

// Generate timestamps for the last 24 hours
const now = new Date();
const getRandomTime = (hoursAgo: number) => {
  const time = new Date(now.getTime() - (hoursAgo * 60 * 60 * 1000));
  return time.toISOString();
};

export const incidents: Incident[] = [
  {
    id: '1',
    cameraId: '01',
    camera: cameras[0],
    type: 'Unauthorised Access',
    tsStart: getRandomTime(2),
    tsEnd: getRandomTime(1.8),
    thumbnailUrl: '/lovable-uploads/0cb2adf8-3674-4ca7-907e-9ed3b7675d8e.png',
    resolved: false
  },
  {
    id: '2',
    cameraId: '01',
    camera: cameras[0],
    type: 'Gun Threat',
    tsStart: getRandomTime(3),
    tsEnd: getRandomTime(2.7),
    thumbnailUrl: '/lovable-uploads/0cb2adf8-3674-4ca7-907e-9ed3b7675d8e.png',
    resolved: false
  },
  {
    id: '3',
    cameraId: '01',
    camera: cameras[0],
    type: 'Unauthorised Access',
    tsStart: getRandomTime(4),
    tsEnd: getRandomTime(3.8),
    thumbnailUrl: '/lovable-uploads/0cb2adf8-3674-4ca7-907e-9ed3b7675d8e.png',
    resolved: false
  },
  {
    id: '4',
    cameraId: '01',
    camera: cameras[0],
    type: 'Unauthorised Access',
    tsStart: getRandomTime(5),
    tsEnd: getRandomTime(4.8),
    thumbnailUrl: '/lovable-uploads/0cb2adf8-3674-4ca7-907e-9ed3b7675d8e.png',
    resolved: false
  },
  {
    id: '5',
    cameraId: '02',
    camera: cameras[1],
    type: 'Face Recognised',
    tsStart: getRandomTime(6),
    tsEnd: getRandomTime(5.7),
    thumbnailUrl: '/lovable-uploads/0cb2adf8-3674-4ca7-907e-9ed3b7675d8e.png',
    resolved: true
  },
  {
    id: '6',
    cameraId: '02',
    camera: cameras[1],
    type: 'Unauthorised Access',
    tsStart: getRandomTime(8),
    tsEnd: getRandomTime(7.8),
    thumbnailUrl: '/lovable-uploads/0cb2adf8-3674-4ca7-907e-9ed3b7675d8e.png',
    resolved: false
  },
  {
    id: '7',
    cameraId: '03',
    camera: cameras[2],
    type: 'Traffic Congestion',
    tsStart: getRandomTime(10),
    tsEnd: getRandomTime(9.5),
    thumbnailUrl: '/lovable-uploads/0cb2adf8-3674-4ca7-907e-9ed3b7675d8e.png',
    resolved: true
  },
  {
    id: '8',
    cameraId: '03',
    camera: cameras[2],
    type: 'Multiple Events',
    tsStart: getRandomTime(12),
    tsEnd: getRandomTime(11.8),
    thumbnailUrl: '/lovable-uploads/0cb2adf8-3674-4ca7-907e-9ed3b7675d8e.png',
    resolved: false
  },
  {
    id: '9',
    cameraId: '01',
    camera: cameras[0],
    type: 'Gun Threat',
    tsStart: getRandomTime(14),
    tsEnd: getRandomTime(13.7),
    thumbnailUrl: '/lovable-uploads/0cb2adf8-3674-4ca7-907e-9ed3b7675d8e.png',
    resolved: true
  },
  {
    id: '10',
    cameraId: '02',
    camera: cameras[1],
    type: 'Unauthorised Access',
    tsStart: getRandomTime(16),
    tsEnd: getRandomTime(15.8),
    thumbnailUrl: '/lovable-uploads/0cb2adf8-3674-4ca7-907e-9ed3b7675d8e.png',
    resolved: false
  },
  {
    id: '11',
    cameraId: '03',
    camera: cameras[2],
    type: 'Face Recognised',
    tsStart: getRandomTime(18),
    tsEnd: getRandomTime(17.7),
    thumbnailUrl: '/lovable-uploads/0cb2adf8-3674-4ca7-907e-9ed3b7675d8e.png',
    resolved: true
  },
  {
    id: '12',
    cameraId: '01',
    camera: cameras[0],
    type: 'Unauthorised Access',
    tsStart: getRandomTime(20),
    tsEnd: getRandomTime(19.8),
    thumbnailUrl: '/lovable-uploads/0cb2adf8-3674-4ca7-907e-9ed3b7675d8e.png',
    resolved: false
  },
  {
    id: '13',
    cameraId: '02',
    camera: cameras[1],
    type: 'Gun Threat',
    tsStart: getRandomTime(22),
    tsEnd: getRandomTime(21.7),
    thumbnailUrl: '/lovable-uploads/0cb2adf8-3674-4ca7-907e-9ed3b7675d8e.png',
    resolved: false
  }
];