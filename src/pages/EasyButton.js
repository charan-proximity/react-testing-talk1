// http://localhost:3000/EasyButton

import * as React from "react";
import EasyButton from "../components/EasyButton";
import { ThemeProvider, useTheme } from "../components/Theme";

function App() {
  return (
    <ThemeProvider>
      <h1>Hit the easy button!</h1>
      <hr />
      <EasyButton onClick={() => alert("that was easy")}>Easy!</EasyButton>
      <hr />
      <ThemeToggler />
    </ThemeProvider>
  );
}

function ThemeToggler() {
  const [theme, setTheme] = useTheme();
  return (
    <button onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}>
      Toggle theme: {theme}
    </button>
  );
}

export default App;
