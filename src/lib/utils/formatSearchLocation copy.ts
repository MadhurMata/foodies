import { ISearchLocation } from '../models/SearchLocation';

export const formatedSearch = (
  searchValue: string,
  items: ISearchLocation[],
) => {
  const formatedSerarch = searchValue.toLowerCase();
  const result = [{}];
  for (let item of items) {
    if (item.country && item.country.toLowerCase().includes(formatedSerarch)) {
      if (!result.includes(item.country)) {
        result.push({ country: item.country });
      }
    }
    if (item.city && item.city.toLowerCase().includes(formatedSerarch)) {
      if (!result.includes({ city: item.city, country: item.country })) {
        result.push({ city: item.city, country: item.country });
      }
    }
    if (
      item.neighborhood &&
      item.neighborhood.toLowerCase().includes(formatedSerarch)
    ) {
      if (
        !result.includes({
          neighborhood: item.neighborhood,
          city: item.city,
          country: item.country,
        })
      ) {
        result.push({
          neighborhood: item.neighborhood,
          city: item.city,
          country: item.country,
        });
      }
    }
  }
  return result;
};
