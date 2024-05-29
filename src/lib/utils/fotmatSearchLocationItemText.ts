import { ISearchLocation } from '../models/SearchLocation';

export const fortmatSearchLocationItemText = (item: ISearchLocation) => {
  return item.neighborhood
    ? item.neighborhood + ', ' + item.city + ', ' + item.country
    : item.city
      ? item.city + ', ' + item.country
      : item.country;
};
