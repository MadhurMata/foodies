import { Link } from '@nextui-org/react';
import SigninForm from '@/components/signinForm/SigninForm';

interface SigninProps {
  searchParams: {
    callbackUrl?: string;
  };
}

const Signin = ({ searchParams }: SigninProps) => {
  return (
    <div className="m-4 grid w-80 grid-cols-1 items-center justify-center">
      <SigninForm callbackUrl={searchParams.callbackUrl} />
      <div className="flex items-center justify-center md:col-span-2">
        <p className="p-2 text-center">¿No tienes cuenta?</p>
        <Link href={'/signup'}>Registrate</Link>
      </div>
      <Link className="block text-center" href={'/forgotPass'}>
        ¿Te has olvidado de la contraseña?
      </Link>
    </div>
  );
};

export default Signin;
