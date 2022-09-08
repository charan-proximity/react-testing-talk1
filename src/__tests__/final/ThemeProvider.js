// testing with context and a custom render method
// http://localhost:3000/EasyButton

import * as React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "../../components/Theme";
import EasyButton from "../../components/EasyButton";

test("renders with the light styles for the light theme", () => {
  const Wrapper = ({ children }) => (
    <ThemeProvider initialTheme="light">{children}</ThemeProvider>
  );
  render(<EasyButton>Easy</EasyButton>, { wrapper: Wrapper });

  const button = screen.getByRole("button", { name: /easy/i });
  expect(button).toHaveStyle(`
    background-color: white;
    color: black;
  `);
});

test("renders with the dark styles for the dark theme", () => {
  const Wrapper = ({ children }) => (
    <ThemeProvider initialTheme="dark">{children}</ThemeProvider>
  );
  render(<EasyButton>Easy</EasyButton>, { wrapper: Wrapper });
  const button = screen.getByRole("button", { name: /easy/i });
  expect(button).toHaveStyle(`
    background-color: black;
    color: white;
  `);
});
