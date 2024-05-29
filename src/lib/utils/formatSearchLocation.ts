import { ISearchLocation } from '../models/SearchLocation';

export const formatedSearch = (
  searchValue: string,
  items: ISearchLocation[],
) => {
  const formatedSerarch = searchValue.toLowerCase();
  return items.filter((item) =>
    item.neighborhood?.toLowerCase().includes(formatedSerarch),
  );
};
