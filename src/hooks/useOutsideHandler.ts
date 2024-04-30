import { useRef, useEffect } from 'react';

const useOutsideHandler = <T extends Node = HTMLElement>(
  handler: () => void,
  extraRefs: React.MutableRefObject<HTMLElement>[] = [],
  parentScrollableElement: HTMLElement | undefined = undefined,
): React.MutableRefObject<T> => {
  const ref = useRef<T>();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      let isClickOnScrollbar =
        event.clientX > document.documentElement.offsetWidth ||
        event.clientY > document.documentElement.offsetHeight;
      if (!isClickOnScrollbar && parentScrollableElement === target) {
        isClickOnScrollbar =
          event.clientX > target.offsetWidth ||
          event.clientY > target.offsetHeight;
      }
      if (isClickOnScrollbar) {
        return;
      }

      const isClickOnExtraRef = extraRefs?.some((extraRef) =>
        extraRef?.current?.contains(target),
      );

      if (ref.current && !ref.current.contains(target) && !isClickOnExtraRef)
        handler?.();
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handler, parentScrollableElement]);

  return ref;
};

export default useOutsideHandler;
