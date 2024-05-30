import connectDB from '@/lib/connectDB';
import User from '@/lib/models/User';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const searchParams = req.nextUrl.searchParams;
    const userName = searchParams.get('userName');

    const user = await User.find({ firstName: userName });

    return NextResponse.json(user);
  } catch (error: unknown) {
    console.error('Error retrieving user:', error);
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message });
    }
  }
}
