import { NextResponse } from 'next/server';
import prisma from '../prisma';

export async function GET() {
  try {
    const users = await prisma.users.findMany();
    console.log('users', users)
    return NextResponse.json(users);
  } catch (error) {
    console.log('error', error);
    return NextResponse.json({ error: 'Error fetching users' }, { status: 500 });
  }
}