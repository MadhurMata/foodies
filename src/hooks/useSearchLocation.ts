import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { ISearchLocation } from '@/lib/models/SearchLocation';

interface useSearchLocationProps {
  searchInput: string;
}

const useSearchLocation = ({
  searchInput,
}: useSearchLocationProps): UseQueryResult<ISearchLocation[]> => {
  const fetchSearch = async () => {
    const res = await fetch(
      `http://localhost:3000/api/searchLocation?location=${searchInput}`,
    );
    return await res.json().then((data) => data);
  };
  return useQuery({
    queryKey: ['searchResults'],
    queryFn: fetchSearch,
    enabled: !!searchInput,
  });
};

export default useSearchLocation;
