import { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '@/lib/models/User';
import * as bcrypt from 'bcrypt';
import NextAuth from 'next-auth/next';
import connectDB from '@/lib/connectDB';

export const authOptions: AuthOptions = {
  pages: {
    signIn: '/auth/signin',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'User Name',
          type: 'text',
          placeholder: 'Your User Name',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials) {
        await connectDB();
        const user = await User.findOne({
          email: credentials?.username,
        });

        if (!user) throw new Error('User name or password is not correct');

        if (!credentials?.password)
          throw new Error('Please Provide Your Password');
        const isPasswordCorrect = await bcrypt.compare(
          credentials.password,
          user.password,
        );
        console.log('isPasswordCorrect', isPasswordCorrect);
        if (!isPasswordCorrect)
          throw new Error('User name or password is not correct');

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, ...userWithoutPass } = user;
        return userWithoutPass;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ token, session }) {
      session.user = token.user;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
