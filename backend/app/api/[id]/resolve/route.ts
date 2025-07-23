import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export async function PATCH(_: Request, { params }: { params: { id: string } }) {
  const incident = await prisma.incident.update({
    where: { id: Number(params.id) },
    data: { resolved: { set: true } }
  });
  return NextResponse.json(incident);
}
