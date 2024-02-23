import { screen } from "@testing-library/react";

import App from "./App";
import { render } from "./utils";

describe("App", () => {
  test("렌더링 되나요?", async () => {
    render(<App />);

    await screen.findByText("Vite + React");
  });
});
