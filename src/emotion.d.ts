import "@emotion/react";

import { ThemeType } from "~/lib";

declare module "@emotion/react" {
  export interface Theme extends ThemeType {
    // ...
  }
}
