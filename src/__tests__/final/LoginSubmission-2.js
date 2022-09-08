// mocking HTTP requests
// 💯 reuse server request handlers
// http://localhost:3000/LoginSubmission

import * as React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { rest } from "msw";
import userEvent from "@testing-library/user-event";

import { server } from "../../mocks/server";

import Login from "../../components/LoginSubmission";

import { faker } from "@faker-js/faker";
function buildLoginForm(overrides) {
  return {
    email: faker.internet.email(),
    password: faker.internet.password(),
    ...overrides,
  };
}

beforeAll(() => server.listen());
afterAll(() => server.close());

test(`logging in displays the user's email`, async () => {
  render(<Login />);
  const { email, password } = { email: "sample", password: "jhii" };

  await userEvent.type(screen.getByLabelText(/email/i), email);
  await userEvent.type(screen.getByLabelText(/password/i), password);
  await userEvent.click(screen.getByRole("button", { name: /submit/i }));

  await waitForElementToBeRemoved(() => screen.queryByLabelText(/loading/i));

  expect(screen.getByRole("button")).toBeInTheDocument();
});

test("omitting the password results in an error", async () => {
  render(<Login />);
  const { email } = buildLoginForm();

  await userEvent.type(screen.getByLabelText(/email/i), email);
  // don't type in the password
  await userEvent.click(screen.getByRole("button", { name: /submit/i }));

  await waitForElementToBeRemoved(() => screen.queryByLabelText(/loading/i));

  expect(screen.getByRole("alert")).toHaveTextContent("password required");
});

test("unknown server error displays the error message", async () => {
  const testErrorMessage = "Oh no, something bad happened";
  server.use(
    rest.post(
      "http://restapi.adequateshop.com/api/authaccount/login",
      async (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ message: testErrorMessage }));
      }
    )
  );
  render(<Login />);
  await userEvent.click(screen.getByRole("button", { name: /submit/i }));

  await waitForElementToBeRemoved(() => screen.queryByLabelText(/loading/i));

  expect(screen.getByRole("alert")).toHaveTextContent(testErrorMessage);
});
