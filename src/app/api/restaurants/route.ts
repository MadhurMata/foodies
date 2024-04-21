import connectDB from '@/lib/connectDB';
import Restaurant from '@/lib/models/Restaurants';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectDB();

  try {
    const restaurants = await Restaurant.find({});
    return NextResponse.json(restaurants);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message });
    }
  }
}
