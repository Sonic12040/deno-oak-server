import { Application } from "./deps.ts";
import { router } from "./api/routes.ts";

const app = new Application();

// Load middleware here with app.use(middleware)

// Routes
app.use(router.routes());

await app.listen({ port: 8000 });
