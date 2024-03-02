import { PropsWithChildren } from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";

import { useDarkMode } from "./useDarkMode";

type Props = PropsWithChildren<{
  // ...
}>;

export const ThemeProvider = ({ children }: Props) => {
  const { theme } = useDarkMode();

  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};
