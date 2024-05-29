import connectDB from '@/lib/connectDB';
import SearchLocation from '@/lib/models/SearchLocation';
import Restaurant from '@/lib/models/Restaurant';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const searchLocationId = req.nextUrl.searchParams.get('searchLocation');

    console.log('searchLocationId', searchLocationId);

    if (!searchLocationId) {
      return NextResponse.json({ message: 'Invalid parameters' });
    }

    const searchLocation = await SearchLocation.findById(searchLocationId)
      .populate({ path: 'restaurants', model: Restaurant })
      .exec();

    if (!searchLocation) {
      throw new Error('SearchLocation not found');
    }

    return NextResponse.json(searchLocation.restaurants);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message });
    }
  }
}
