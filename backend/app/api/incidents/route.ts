import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const resolved = searchParams.get('resolved');
  const incidents = await prisma.incident.findMany({
    where: { resolved: resolved === 'true' },
    orderBy: { tsStart: 'desc' },
    include: { camera: true }
  });
  return NextResponse.json(incidents);
}
