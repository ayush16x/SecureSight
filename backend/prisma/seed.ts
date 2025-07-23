import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

async function main() {
  // Create Cameras
  const cameraA = await prisma.camera.create({
    data: { name: "Shop Floor A", location: "Ground Floor" }
  });
  const cameraB = await prisma.camera.create({
    data: { name: "Vault", location: "Basement" }
  });
  const cameraC = await prisma.camera.create({
    data: { name: "Entrance", location: "Main Gate" }
  });

  // Create Incidents -- replace dates and thumbnails as you wish
  await prisma.incident.createMany({
    data: [
      { cameraId: cameraA.id, type: "Unauthorised Access", tsStart: new Date('2025-07-21T00:01:00Z'), tsEnd: new Date('2025-07-21T00:03:00Z'), thumbnailUrl: "/thumbnails/img1.jpg", resolved: false },
      { cameraId: cameraB.id, type: "Gun Threat", tsStart: new Date('2025-07-21T02:09:00Z'), tsEnd: new Date('2025-07-21T02:10:00Z'), thumbnailUrl: "/thumbnails/img2.jpg", resolved: false },
      { cameraId: cameraC.id, type: "Face Recognised", tsStart: new Date('2025-07-21T03:43:00Z'), tsEnd: new Date('2025-07-21T03:44:00Z'), thumbnailUrl: "/thumbnails/img3.jpg", resolved: false },
      { cameraId: cameraA.id, type: "Unauthorised Access", tsStart: new Date('2025-07-21T05:13:00Z'), tsEnd: new Date('2025-07-21T05:14:00Z'), thumbnailUrl: "/thumbnails/img4.jpg", resolved: false },
      { cameraId: cameraB.id, type: "Gun Threat", tsStart: new Date('2025-07-21T06:23:00Z'), tsEnd: new Date('2025-07-21T06:24:00Z'), thumbnailUrl: "/thumbnails/img5.jpg", resolved: false },
      { cameraId: cameraC.id, type: "Face Recognised", tsStart: new Date('2025-07-21T07:41:00Z'), tsEnd: new Date('2025-07-21T07:43:00Z'), thumbnailUrl: "/thumbnails/img6.jpg", resolved: false },
      { cameraId: cameraA.id, type: "Gun Threat", tsStart: new Date('2025-07-21T10:21:00Z'), tsEnd: new Date('2025-07-21T10:23:00Z'), thumbnailUrl: "/thumbnails/img7.jpg", resolved: false },
      { cameraId: cameraB.id, type: "Face Recognised", tsStart: new Date('2025-07-21T12:14:00Z'), tsEnd: new Date('2025-07-21T12:16:00Z'), thumbnailUrl: "/thumbnails/img8.jpg", resolved: false },
      { cameraId: cameraC.id, type: "Unauthorised Access", tsStart: new Date('2025-07-21T14:31:00Z'), tsEnd: new Date('2025-07-21T14:32:00Z'), thumbnailUrl: "/thumbnails/img9.jpg", resolved: false },
      { cameraId: cameraA.id, type: "Face Recognised", tsStart: new Date('2025-07-21T16:43:00Z'), tsEnd: new Date('2025-07-21T16:44:00Z'), thumbnailUrl: "/thumbnails/img10.jpg", resolved: false },
      { cameraId: cameraB.id, type: "Unauthorised Access", tsStart: new Date('2025-07-21T18:04:00Z'), tsEnd: new Date('2025-07-21T18:05:00Z'), thumbnailUrl: "/thumbnails/img11.jpg", resolved: false },
      { cameraId: cameraC.id, type: "Gun Threat", tsStart: new Date('2025-07-21T20:27:00Z'), tsEnd: new Date('2025-07-21T20:29:00Z'), thumbnailUrl: "/thumbnails/img12.jpg", resolved: false }
    ]
  });
}

main()
  .then(() => console.log("Database seeded!"))
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect())
