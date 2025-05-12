import { createContext, useState } from "react";
import Main from "./Main";

type ThemeContextType = {
  screenTheme: string;
  setScreenTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);
const DarkMode = () => {
  const [screenTheme, setScreenTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{screenTheme, setScreenTheme}}>
      <Main />
    </ThemeContext.Provider>
  );
}

export default DarkMode
export { ThemeContext }
