import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";
import { replaceCamelWithSpaces } from "./App";

/*
  Break down syntax
  
  render: Creates Virtual DOM for argument JSX

  screen: Access Virtual Dom using " Screen" global 
  
  screen.getByText : find element by screen text 

  /learn react/i :  regular expression , case sensitive 

  "learn react" can use string

   expect(linkElement).toBeInTheDocument() : assertion  causes the test to succeed or fail
  
  // Matching a string:
  getByText('Hello World') // full string match
  getByText('llo Worl', {exact: false}) // substring match
  getByText('hello world', {exact: false}) // ignore case

  // Matching a regex:
  getByText(/World/) // substring match
  getByText(/world/i) // substring match, ignore case
  getByText(/^hello world$/i) // full string match, ignore case
  getByText(/Hello W?oRlD/i) // advanced regex

  // Matching with a custom function:
  getByText((content, element) => content.startsWith('Hello'))

*/

test("renders learn react link", () => {
  render(<App />); // renders App component
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

xtest("button has correct initial color", () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to Midnight Blue'
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  // click button
  userEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });

  // expect the button text to be 'Change to MediumVioletRed'
  expect(colorButton).toHaveTextContent("Change to Medium Violet Red");
});

xtest("initial conditions", () => {
  render(<App />);

  // check that the button starts out enabled
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

xtest("Checkbox disables button on first click and enables on second click", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  userEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  userEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

xtest("Disabled button has gray background and reverts to red", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  // disable button
  userEvent.click(checkbox);
  expect(colorButton).toHaveStyle("background-color: gray");

  // re-enable button
  userEvent.click(checkbox);
  expect(colorButton).toHaveStyle("background-color: MediumVioletRed");
});

xtest("Clicked disabled button has gray background and reverts to blue", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  // change button to blue
  userEvent.click(colorButton);

  // disable button
  userEvent.click(checkbox);
  expect(colorButton).toHaveStyle("background-color: gray");

  // re-enable button
  userEvent.click(checkbox);
  expect(colorButton).toHaveStyle("background-color: MidnightBlue");
});

xdescribe("spaces before camel-case capital letters", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });
  test("Works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("Works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
