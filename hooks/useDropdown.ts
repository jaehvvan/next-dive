import { useEffect, useState } from 'react';

const useDropdown = () => {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, []);

  useEffect(() => {
    if (isOpened) {
      document.addEventListener('click', closeDropdown, { once: true });
    }
  }, [isOpened]);

  const openDropdown = () => {
    setIsOpened(true);
  };

  const closeDropdown = () => {
    setIsOpened(false);
  };

  const toggleDropdown = () => {
    setIsOpened((prevIsOpened) => !prevIsOpened);
  };

  return {
    isOpened,
    openDropdown,
    closeDropdown,
    toggleDropdown,
  };
};

export default useDropdown;
