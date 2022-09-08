// mocking HTTP requests
// http://localhost:3000/LoginSubmission

import * as React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { rest } from "msw";
import { setupServer } from "msw/node";
import Login from "../../components/LoginSubmission";

import { faker } from "@faker-js/faker";
function buildLoginForm(overrides) {
  return {
    email: faker.internet.email(),
    password: faker.internet.password(),
    ...overrides,
  };
}
const server = setupServer(
  rest.post(
    "http://restapi.adequateshop.com/api/authaccount/login",
    async (req, res, ctx) => {
      if (!req.body.password) {
        return res(ctx.status(400), ctx.json({ message: "password required" }));
      }
      if (!req.body.email) {
        return res(ctx.status(400), ctx.json({ message: "email required" }));
      }
      return res(ctx.json({ data: { Email: req.body.email } }));
    }
  )
);

beforeAll(() => server.listen());
afterAll(() => server.close());

xtest(`logging in displays the user's email`, async () => {
  render(<Login />);
  const { email, password } = buildLoginForm();

  await userEvent.type(screen.getByLabelText(/email/i), email);
  await userEvent.type(screen.getByLabelText(/password/i), password);
  await userEvent.click(screen.getByRole("button", { name: /submit/i }));

  await waitForElementToBeRemoved(() => screen.queryByLabelText(/loading/i));

  expect(screen.getByText(email)).toBeInTheDocument();
});
