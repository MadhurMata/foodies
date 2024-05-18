'use client';

import { Button, Link } from '@nextui-org/react';
import { useSession } from 'next-auth/react';

const SigninButton = () => {
  const { data: session } = useSession();
  return (
    <div className="flex, items-center gap-2">
      {session && session.user ? (
        <>
          <p>{session.user.email}</p>
          <Link href="/api/signout">Sign out</Link>
        </>
      ) : (
        <Button as={Link} className="" href="/api/signin">
          Sign in
        </Button>
      )}
    </div>
  );
};

export default SigninButton;
