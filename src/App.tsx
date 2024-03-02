import { css, useTheme } from "@emotion/react";

function App() {
  const theme = useTheme();

  return (
    <div
      css={css`
        width: 100px;
        height: 100px;
        background-color: ${theme.gray0};
      `}
    >
      App
    </div>
  );
}

export default App;
