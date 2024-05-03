import { KeyboardEvent, useEffect, useState } from 'react';
import { KEYS } from '@/constants';
import useKeys from './useKeys';
import useOutsideHandler from './useOutsideHandler';

const useDropdown = <T>({
  items = [],
  isLoading = false,
  extraRefs = [],
  parentScrollableElement,
  onSelected,
  selectedIndexOnOpen = -1,
}: {
  items?: T[];
  isLoading?: boolean;
  debounceDelay?: number;
  extraRefs?: React.MutableRefObject<HTMLElement>[];
  parentScrollableElement?: HTMLElement;
  onSelected?: ({ item, index }: { item: T; index: number }) => void;
  selectedIndexOnOpen?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isUsingKeyboard, setIsUsingKeyboard] = useState(false);
  const hasNoMatches = !isLoading && !items?.length;

  useEffect(
    () => setCurrentIndex(selectedIndexOnOpen),
    [JSON.stringify(items), isOpen],
  );

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleEsc = useKeys(() => {
    handleClose();
  }, [KEYS.escape]);

  const handleEnter = useKeys(
    (event) => {
      if (isOpen && items?.length) {
        event.preventDefault();
        event.stopPropagation();
        onSelected({ item: items[currentIndex], index: currentIndex });
        setIsOpen(false);
      }
    },
    [KEYS.enter],
    false,
  );

  const handleUp = useKeys(() => {
    setIsUsingKeyboard(true);
    setCurrentIndex(Math.max(currentIndex - 1, 0));
  }, [KEYS.up]);

  const handleDown = useKeys(() => {
    setIsUsingKeyboard(true);
    setCurrentIndex(Math.min(currentIndex + 1, items.length - 1));
  }, [KEYS.down]);

  const dropdownRef = useOutsideHandler<HTMLUListElement>(
    handleClose,
    extraRefs,
    parentScrollableElement,
  );

  const handleKeyDown = (event: unknown) => {
    const keyboardEvent = event as KeyboardEvent<HTMLElement>;
    handleEsc(keyboardEvent);
    handleEnter(keyboardEvent);
    handleUp(keyboardEvent);
    handleDown(keyboardEvent);
  };

  const handleMouseOver = (index: number) => {
    setIsUsingKeyboard(false);
    setCurrentIndex(index);
  };

  return {
    dropdownRef,
    hasNoMatches,
    isOpen,
    setIsOpen,
    currentIndex,
    setCurrentIndex,
    items,
    isUsingKeyboard,
    handleKeyDown,
    handleMouseOver,
  };
};

export default useDropdown;
