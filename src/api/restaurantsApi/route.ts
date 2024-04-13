import { PrismaClient } from '@prisma/client/extension';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function main() {
  try {
    await prisma.$connect();
  } catch (err) {
    return Error('Database connection unsuccessfull');
  }
}

export const GET = async (req: Request, res: NextResponse) => {
  console.log('console', req, res);
  try {
    await main();
    const restaurants = await prisma.restaurants.findMany();
    return NextResponse.json(
      { message: 'Success', restaurants },
      { status: 200 },
    );
  } catch (err) {
    NextResponse.json({ message: 'Error', err }, { status: 500 });
  } finally {
    prisma.$disconnect();
  }
};

export const POST = async (req: Request, res: NextResponse) => {
  console.log('POST', res);
};

export const CREATE = async (req: Request, res: NextResponse) => {
  try {
    const restaurants = await prisma.restaurants.findMany();
    return NextResponse.json(
      { message: 'Success', restaurants },
      { status: 200 },
    );
  } catch (err) {
    NextResponse.json({ message: 'Error', err }, { status: 500 });
  }
  console.log('CREATE', res);
};
