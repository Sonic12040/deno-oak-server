import { router } from "./api/routes.ts";
import { Application } from "./deps.ts";
import { assertStrictEquals, assertObjectMatch, axiosd } from "./dev_deps.ts";

Deno.test("/route returns correct status and data", async () => {
  // Arrange
  const app = new Application();
  const controller = new AbortController();
  const { signal } = controller;
  app.use(router.routes());
  app.use(router.allowedMethods());
  const listenPromise = app.listen({ port: 8001, signal });
  // Act
  const response = await axiosd.get("http://localhost:8001/route");
  // Assert
  assertStrictEquals(response.status, 200);
  assertObjectMatch(response.data, {
    hello: { world: "example" },
  });
  // Cleanup
  controller.abort();
  await listenPromise;
  console.log("server closed");
});
