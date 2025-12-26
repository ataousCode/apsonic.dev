import { useState, useCallback, useRef, useEffect } from 'react';

/**
 * Custom hook for hover state management
 * Returns hover state and handlers
 */
export function useHover<T extends HTMLElement = HTMLElement>(): [
  boolean,
  {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  },
  React.RefObject<T | null>
] {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<T | null>(null);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseEnter, handleMouseLeave]);

  return [
    isHovered,
    {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
    ref,
  ];
}

