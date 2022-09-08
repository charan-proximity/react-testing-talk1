import { rest } from "msw";

const delay = process.env.NODE_ENV === "test" ? 0 : 1500;

const handlers = [
  rest.post(
    "http://restapi.adequateshop.com/api/authaccount/login",
    async (req, res, ctx) => {
      if (!req.body.password) {
        return res(
          ctx.delay(delay),
          ctx.status(400),
          ctx.json({ message: "password required" })
        );
      }
      if (!req.body.email) {
        return res(
          ctx.delay(delay),
          ctx.status(400),
          ctx.json({ message: "email required" })
        );
      }
      return res(
        ctx.delay(delay),
        ctx.json({ data: { Email: req.body.email } })
      );
    }
  ),
];

export { handlers };
