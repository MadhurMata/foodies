import { ISearchLocation } from '../models/SearchLocation';

export const formatedSearch = (
  searchValue: string,
  items: ISearchLocation[],
) => {
  const formatedSerarch = searchValue.toLowerCase();
  const result: string[] = [];
  for (let item of items) {
    if (item.country && item.country.toLowerCase().includes(formatedSerarch)) {
      if (!result.includes(item.country)) {
        result.push(item.country);
      }
    }
    if (item.city && item.city.toLowerCase().includes(formatedSerarch)) {
      if (!result.includes(item.city + ', ' + item.country)) {
        result.push(item.city + ', ' + item.country);
      }
    }
    if (
      item.neighborhood &&
      item.neighborhood.toLowerCase().includes(formatedSerarch)
    ) {
      if (
        !result.includes(
          item.neighborhood + ', ' + item.city + ', ' + item.country,
        )
      ) {
        result.push(item.neighborhood + ', ' + item.city + ', ' + item.country);
      }
    }
  }
  return result;
};
