import connectDB from '@/lib/connectDB';
import SearchLocation from '@/lib/models/SearchLocation';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const searchParams = req.nextUrl.searchParams;
    const location = searchParams.get('location');

    const locations = await SearchLocation.find({
      $or: [
        { neighborhood: { $regex: location, $options: 'i' } }, // Case-insensitive search for neighborhood
        { city: { $regex: location, $options: 'i' } }, // Case-insensitive search for city
        { country: { $regex: location, $options: 'i' } }, // Case-insensitive search for country
      ],
    });

    return NextResponse.json(locations);
  } catch (error: unknown) {
    console.error('Error retrieving restaurants:', error);
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message });
    }
  }
}
