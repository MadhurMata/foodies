'use client';
import React from 'react';
import useGetUser from '@/hooks/useGetUser';

const UserProfile = ({ params }: { params: { userName: string } }) => {
  const { data: user } = useGetUser({
    userName: params.userName,
  });

  return (
    <div className="flex w-full gap-6 p-6">
      <div>
        <img
          className="h-20 w-20 rounded-full shadow-lg"
          alt="Imagen de perfil"
          src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
        />
      </div>
      <div>
        <h2 className="text-lg font-bold">{user && user[0].firstName}</h2>
        <button
          type="button"
          className="shadow-light-3 hover:shadow-light-2 inline-block rounded-md bg-neutral-400 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-200 focus:bg-neutral-200"
        >
          Editar perfil
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
