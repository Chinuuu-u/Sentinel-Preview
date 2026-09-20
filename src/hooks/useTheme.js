import { useEffect, useState } from "react";

export function useTheme() {
  const [dark, setDark] = useState(
    () => localStorage.getItem("chernekov-theme") === "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("chernekov-theme", dark ? "dark" : "light");
  }, [dark]);

  return {
    dark,
    toggleTheme: () => setDark((value) => !value),
  };
}
