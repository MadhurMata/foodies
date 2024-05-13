import connectDB from '@/lib/connectDB';
import SearchLocation from '@/lib/models/SearchLocation';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  await connectDB();

  try {
    const searchLocationId = req.nextUrl.searchParams.get('id');

    if (!searchLocationId) {
      return NextResponse.json({ message: 'Invalid parameters' });
    }

    const searchLocation = await SearchLocation.findById(searchLocationId)
      .populate('restaurants')
      .exec();

    if (!searchLocation) {
      throw new Error('SearchLocation not found');
    }

    return NextResponse.json(searchLocation);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message });
    }
  }
}
