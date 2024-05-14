import { BaseHTMLAttributes, Ref, forwardRef } from 'react';
import ListItem from './listItem/ListItem';
import { ISearchLocation } from '@/lib/models/SearchLocation';
interface AutocompleteListProps extends BaseHTMLAttributes<HTMLUListElement> {
  items: ISearchLocation[];
  currentIndex: number;
  show?: boolean;
  onHandleMouseOver: (index: number) => void;
  onSelectItem: (item: ISearchLocation) => void;
}

const AutocompleteList = forwardRef(
  (
    {
      items = [],
      currentIndex,
      show = false,
      onHandleMouseOver,
      onSelectItem,
    }: AutocompleteListProps,
    ref: Ref<HTMLUListElement>,
  ) => {
    return (
      <>
        {show && (
          <ul
            ref={ref}
            className="absolute left-0 top-20 z-10 w-full rounded-2xl border bg-white p-4 shadow-lg focus:border-neutral-500"
          >
            {items &&
              items?.map((item, index) => {
                return (
                  <ListItem
                    key={item._id}
                    isFocused={index === currentIndex}
                    onClick={() => onSelectItem(item)}
                    onMouseOver={() => onHandleMouseOver(index)}
                    item={item}
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
