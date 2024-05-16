'use client';

import { Button, Checkbox, Input, Link } from '@nextui-org/react';
import Icon from '../icon/Icon';
import { useState } from 'react';

function SignupForm() {
  const [isVisiblePass, setIsVisiblePass] = useState(false);

  const toggleVisiblePass = () => setIsVisiblePass((prev) => !prev);
  return (
    <form className="grid grid-cols-2 gap-3 rounded-md border p-2 shadow">
      <Input
        label="Nombre"
        startContent={
          <Icon
            path="/icons/user.svg"
            size={20}
            strokeColor="black"
            strokeWidth="1.5"
          />
        }
      />
      <Input
        label="Apellidos"
        startContent={
          <Icon
            path="/icons/user.svg"
            size={20}
            strokeColor="black"
            strokeWidth="1.5"
          />
        }
      />
      <Input
        className="col-span-2"
        label="Email"
        startContent={
          <Icon
            path="/icons/mail.svg"
            size={20}
            strokeColor="black"
            strokeWidth="1.5"
          />
        }
      />
      <Input
        className="col-span-2"
        label="Teléfono"
        type="number"
        startContent={
          <Icon
            path="/icons/phone.svg"
            size={20}
            strokeColor="black"
            strokeWidth="1.5"
          />
        }
      />
      <Input
        className="col-span-2"
        label="Contraseña"
        type={isVisiblePass ? 'text' : 'password'}
        startContent={
          <Icon
            path="/icons/key.svg"
            size={20}
            strokeColor="black"
            strokeWidth="1.5"
          />
        }
        endContent={
          isVisiblePass ? (
            <Icon
              styles="cursor-pointer"
              path="/icons/eye.svg"
              size={20}
              strokeColor="black"
              strokeWidth="1.5"
              onClick={toggleVisiblePass}
            />
          ) : (
            <Icon
              styles="cursor-pointer"
              path="/icons/eye-off.svg"
              size={20}
              strokeColor="black"
              strokeWidth="1.5"
              onClick={toggleVisiblePass}
            />
          )
        }
      />
      <Input
        className="col-span-2"
        label="Confirmar Contraseña"
        type="password"
        startContent={
          <Icon
            path="/icons/key.svg"
            size={20}
            strokeColor="black"
            strokeWidth="1.5"
          />
        }
      />
      <Checkbox className="col-span-2">
        Acepto las <Link href="/terms">condiciones</Link>{' '}
      </Checkbox>
      <div className="col-span-2 flex justify-center">
        <Button className="w-48 bg-brand" type="submit">
          Enviar
        </Button>
      </div>
    </form>
  );
}

export default SignupForm;
