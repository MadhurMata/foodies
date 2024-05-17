'use client';

import { Button, Link } from '@nextui-org/react';
import { useSession } from 'next-auth/react';

const SigninButton = () => {
  const { data: session } = useSession();

  console.log('session', session);
  return (
    <div className="flex, items-center gap-2">
      {session && session.user ? (
        <>
          <p>{session.user.email}</p>
          <Link href="/api/auth/signout">Sign out</Link>
        </>
      ) : (
        <Button as={Link} className="" href="/api/auth/signin">
          Sign in
        </Button>
      )}
    </div>
  );
};

export default SigninButton;
