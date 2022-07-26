import React, { useContext } from 'react';
import { ThemeContext } from './themeContext';
import { BsSun } from 'react-icons/bs';
import { BsMoon } from 'react-icons/bs';

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      {theme === 'dark' ? (

        <BsSun onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />
      ) : (

        <BsMoon onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />
      )}
    </div>
  );
};

export default Toggle;