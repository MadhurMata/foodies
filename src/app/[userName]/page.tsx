'use client';
import React from 'react';
import useGetUser from '@/hooks/useGetUser';

const UserProfile = ({ params }: { params: { userName: string } }) => {
  const { data: user } = useGetUser({
    userName: params.userName,
  });

  return <div>{user && user[0].firstName}</div>;
};

export default UserProfile;
