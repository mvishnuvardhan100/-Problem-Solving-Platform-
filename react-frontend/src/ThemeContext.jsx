import {createContext, useState} from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ( {children} ) => {
  const [isDark, setIsDark] = useState(false);

  const changeTheme = () => {
    setIsDark(!isDark);
  }

  return (
    <ThemeContext.Provider value={{changeTheme, isDark}}>
      {children}
    </ThemeContext.Provider>
  )
}