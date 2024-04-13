import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  return new PrismaClient().$extends({
    result: {
      user: {
        name: {
          compute(user) {
            return `${user.name} ${user.email}`;
          },
        },
      },
    },
  });
};

const prismaGlobal = globalThis as unknown as {
  prisma: undefined | ReturnType<typeof prismaClientSingleton>;
};

const prisma = prismaGlobal.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') prismaGlobal.prisma = prisma;

export default prisma;
