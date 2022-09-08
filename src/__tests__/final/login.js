// form testing
// http://localhost:3000/login

import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../../components/login";
import { faker } from "@faker-js/faker";
function buildLoginForm(overrides) {
  return {
    email: faker.internet.email(),
    password: faker.internet.password(),
    ...overrides,
  };
}

test("submitting the form calls onSubmit with email and password", async () => {
  let submittedData;
  const handleSubmit = (data) => (submittedData = data);
  render(<Login onSubmit={handleSubmit} />);
  const email = "chucknorris";
  const password = "i need no password";

  await userEvent.type(screen.getByLabelText(/email/i), email);
  await userEvent.type(screen.getByLabelText(/password/i), password);
  await userEvent.click(screen.getByRole("button", { name: /submit/i }));

  expect(submittedData).toEqual({
    email,
    password,
  });
});

test("submitting the form calls onSubmit with email and password using faker n jest fn", async () => {
  const handleSubmit = jest.fn();
  render(<Login onSubmit={handleSubmit} />);
  const { email, password } = buildLoginForm();

  await userEvent.type(screen.getByLabelText(/email/i), email);
  await userEvent.type(screen.getByLabelText(/password/i), password);
  await userEvent.click(screen.getByRole("button", { name: /submit/i }));

  expect(handleSubmit).toHaveBeenCalledWith({
    email,
    password,
  });
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});
