// testing with context and a custom render method
// 💯 swap @testing-library/react with app test utils
// http://localhost:3000/EasyButton

import * as React from "react";
import { render, screen } from "../../mocks/test-utils";
import EasyButton from "../../components/EasyButton";

test("renders with the light styles for the light theme", () => {
  render(<EasyButton>Easy</EasyButton>, { theme: "light" });
  const button = screen.getByRole("button", { name: /easy/i });
  expect(button).toHaveStyle(`
    background-color: white;
    color: black;
  `);
});

test("renders with the dark styles for the dark theme", () => {
  render(<EasyButton>Easy</EasyButton>, { theme: "dark" });
  const button = screen.getByRole("button", { name: /easy/i });
  expect(button).toHaveStyle(`
    background-color: black;
    color: white;
  `);
});
