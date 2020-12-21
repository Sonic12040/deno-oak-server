import { Router } from "../deps.ts";

export const router = new Router();

// You can chain routes, and you can use :param
router.get("/route", (ctx) => {
  ctx.response.body = {
    hello: {
      world: "example",
    },
  };
});
