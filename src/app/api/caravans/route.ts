import { NextResponse } from 'next/server';
import prisma from '../prisma';

export async function GET() {
  try {
    const caravans = await prisma.caravans.findMany();
    return NextResponse.json(caravans);
  } catch (error) {
    console.log('error', error);
    return NextResponse.json({ error: 'Error fetching users' }, { status: 500 });
  }
}