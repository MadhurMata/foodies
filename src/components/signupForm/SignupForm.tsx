'use client';

import { useState } from 'react';
import { Button, Checkbox, Input, Link } from '@nextui-org/react';
import Icon from '@/components/icon/Icon';
import { z } from 'zod';
import validator from 'validator';

const FormSchema = z
  .object({
    firstName: z
      .string()
      .min(2, 'El nombre tiene que tener al menos 2 caracteres')
      .max(45, 'El nombre tiene que tener menos de 45 caracteres')
      .regex(new RegExp("^[a-zA-Z]+$', 'Caracteres especiales no permitidos")),
    lastName: z
      .string()
      .min(2, 'Los apellidos tienen que tener al menos 2 caracteres')
      .max(45, 'Los apellidos tienen que tener menos de 45 caracteres')
      .regex(new RegExp("^[a-zA-Z]+$', 'Caracteres especiales no permitidos")),
    email: z.string().email('Porfavor añade una dirección de correo valida'),
    phone: z.string().refine(validator.isMobilePhone),
    password: z
      .string()
      .min(6, 'La contraseña tiene que tener al menos 6 caracteres')
      .max(50, 'La contraseña tiene que tener menos de 50 caracteres')
      .refine(validator.isMobilePhone, 'Porfavor añade un telefono valido'),
    confirmPassword: z
      .string()
      .min(6, 'La contraseña tiene que tener al menos 6 caracteres')
      .max(50, 'La contraseña tiene que tener menos de 50 caracteres')
      .refine(validator.isMobilePhone, 'Porfavor añade un telefono valido'),
    accepted: z.literal(true, {
      errorMap: () => ({
        message: 'Porfavor acepta las condiciones',
      }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Contraseña y Confirmar Contraseña tienen que ser iguales',
    path: ['password', 'confirmPassword'],
  });

console.log(FormSchema);

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
