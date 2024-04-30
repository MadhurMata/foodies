import { NextResponse } from 'next/server';
import { seedDatabase } from '@/lib/scripts/neighborhoodResraturantSeed';

export async function GET() {
  try {
    const restaurants = seedDatabase();
    return NextResponse.json(restaurants);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message });
    }
  }
}
