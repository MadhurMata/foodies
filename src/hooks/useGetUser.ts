import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { IUser } from '@/lib/models/User';

interface useGetUserProps {
  userName: string;
}

const useGetUser = ({ userName }: useGetUserProps): UseQueryResult<IUser[]> => {
  const fetchUser = async () => {
    const res = await fetch(
      `http://localhost:3000/api/users/user?userName=${userName}`,
    );
    return await res.json().then((data) => data);
  };
  return useQuery({
    queryKey: ['user'],
    queryFn: fetchUser,
    enabled: !!userName,
  });
};

export default useGetUser;
