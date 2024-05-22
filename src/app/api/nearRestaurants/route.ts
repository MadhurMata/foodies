import connectDB from '@/lib/connectDB';
import Restaurant from '@/lib/models/Restaurant';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const searchParams = req.nextUrl.searchParams;
    const latitude = searchParams.get('latitude');
    const longitude = searchParams.get('longitude');
    const radius = searchParams.get('radius');

    if (!latitude || !longitude || !radius) {
      return NextResponse.json({ message: 'Invalid parameters' });
    }

    const center = {
      type: 'Point',
      coordinates: [
        parseFloat(latitude as string),
        parseFloat(longitude as string),
      ],
    };

    const restaurants = await Restaurant.find({
      location: {
        $nearSphere: {
          $geometry: center,
          $maxDistance: parseFloat(radius as string) * 1000, // Radius in meters
        },
      },
    });

    return NextResponse.json(restaurants);
  } catch (error: unknown) {
    console.error('Error retrieving restaurants:', error);
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message });
    }
  }
}
