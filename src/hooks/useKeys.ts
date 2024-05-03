import React from 'react';

const useKeys = (
  handler: (event: React.KeyboardEvent<HTMLElement> | KeyboardEvent) => void,
  keys: string[],
  preventDefault = true,
) => {
  const handleKeyEvent = (
    event: React.KeyboardEvent<HTMLElement> | KeyboardEvent,
  ) => {
    if (keys && keys.includes(event.code || event.key)) {
      if (preventDefault) {
        event.preventDefault();
        event.stopPropagation();
      }
      handler(event);
    }
  };

  return handleKeyEvent;
};

export default useKeys;
