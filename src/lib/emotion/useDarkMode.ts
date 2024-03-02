import { useLayoutEffect, useState } from "react";
import { THEME } from "./theme";

export const useDarkMode = (defaultTheme = THEME["LIGHT"]) => {
  const [theme, setTheme] = useState(defaultTheme);

  useLayoutEffect(() => {
    /** @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList */
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

    const changeListener = ({ matches }: MediaQueryListEvent) => {
      setTheme(THEME[matches ? "DARK" : "LIGHT"]);
    };

    mediaQueryList.addEventListener("change", changeListener);

    return () => {
      mediaQueryList.removeEventListener("change", changeListener);
    };
  }, []);

  return {
    theme,
  };
};
