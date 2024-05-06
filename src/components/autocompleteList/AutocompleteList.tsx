import { BaseHTMLAttributes, Ref, forwardRef } from 'react';
import ListItem from './listItem/ListItem';
interface AutocompleteListProps extends BaseHTMLAttributes<HTMLUListElement> {
  items: string[];
  currentIndex: number;
  show?: boolean;
  onHandleMouseOver: (index: number) => void;
}

const AutocompleteList = forwardRef(
  (
    {
      items,
      currentIndex,
      show = false,
      onHandleMouseOver,
    }: AutocompleteListProps,
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
            {items?.map((item, index) => {
              return (
                <ListItem
                  key={item}
                  isFocused={index === currentIndex}
                  onClick={getRestaurants}
                  onMouseOver={() => onHandleMouseOver(index)}
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
