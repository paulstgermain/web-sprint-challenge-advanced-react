import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage'; 
import usePrefersDarkMode from './usePrefersDarkMode';

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode');

    const prefersDarkMode = usePrefersDarkMode();

    const enabled =
    typeof darkMode !== 'undefined' ? darkMode : prefersDarkMode;

    useEffect(
        () => {
          const className = 'dark-mode';
          const element = window.document.body;
          if (enabled) {
            element.classList.add(className);
          } else {
            element.classList.remove(className);
          }
        },
        [enabled] 
      );

    return [darkMode, setDarkMode];
}