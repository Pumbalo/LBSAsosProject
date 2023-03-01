import { useState } from "react";

export const ThemeToggler = () => {
  // Tar "current theme" från LocalStorage och sätter det till de aktiva theme.
  var getTheme = localStorage.getItem("CurrentTheme");
  const [theme, setTheme] = useState(getTheme);

  // Detta togglar ifrån light och dark mode.
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return [theme, toggleTheme];
};
