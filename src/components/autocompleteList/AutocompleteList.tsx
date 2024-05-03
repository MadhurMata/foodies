import { BaseHTMLAttributes, Ref, forwardRef } from 'react';
import ListItem from './listItem/ListItem';
interface AutocompleteListProps extends BaseHTMLAttributes<HTMLUListElement> {
  items: string[];
  show?: boolean;
}

const AutocompleteList = forwardRef(
  (
    { items, show = false }: AutocompleteListProps,
    ref: Ref<HTMLUListElement>,
  ) => {
    const getRestaurants = () => {
      console.log('get restaurants by location');
    };

    return (
      <>
        {show && (
          <ul
            ref={ref}
            className="absolute left-0 top-20 w-full rounded-2xl border p-4 shadow-lg focus:border-neutral-500"
          >
            {items?.map((item) => {
              return (
                <ListItem
                  key={item}
                  onClick={getRestaurants}
                  text={item}
                  iconUrl="http://www.w3.org/2000/svg"
                />
              );
            })}
          </ul>
        )}
      </>
    );
  },
);

AutocompleteList.displayName = 'AutocompleteList';

export default AutocompleteList;
