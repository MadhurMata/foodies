import { Ref, forwardRef } from 'react';
import ListItem from './listItem/ListItem';

interface AutocompleteListProps {
  show?: boolean;
}

const AutocompleteList = forwardRef(
  ({ show = false }: AutocompleteListProps, ref: Ref<HTMLDivElement>) => {
    const getRestaurants = () => {
      console.log('get restaurants by location');
    };
    return (
      <>
        {show && (
          <div
            ref={ref}
            className="absolute left-0 top-20 w-full rounded-2xl border p-4 shadow-lg"
          >
            <ul>
              <ListItem
                onClick={getRestaurants}
                text="Component 1"
                iconUrl="http://www.w3.org/2000/svg"
              />
              <ListItem
                onClick={getRestaurants}
                text="Component 2"
                iconUrl="http://www.w3.org/2000/svg"
              />
            </ul>
          </div>
        )}
      </>
    );
  },
);

AutocompleteList.displayName = 'AutocompleteList';

export default AutocompleteList;
