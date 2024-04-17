import { useEffect } from 'react';

export const capitalizeFirstLetter = (word) => {
  // Check if the word is not empty
  if (word.length === 0) {
    return word;
  }

  // Capitalize the first letter and concatenate with the rest of the word
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const formatDate = (dateString) => {
  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options);
};


export function useClickOutside(refs, handler) {
  useEffect(() => {
    const listener = (event) => {
      refs.forEach((ref) => {
        if (ref.current && !ref.current.contains(event.target)) {
          handler(event);
        }
      });
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [refs, handler]);
}
