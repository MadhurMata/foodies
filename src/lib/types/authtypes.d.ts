import User from '@/lib/models/User';

declare module 'next-auth' {
  interface Session {
    user: IUser;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    user: User;
  }
}
