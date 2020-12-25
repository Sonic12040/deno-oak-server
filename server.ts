import { Application } from "./deps.ts";
import { router } from "./api/routes.ts";
import { logger } from "./api/middleware/logger.ts";
import { timing } from "./api/middleware/timing.ts";

const app = new Application();

// Load middleware here with app.use(middleware)
app.use(logger);
app.use(timing);

// Routes
app.use(router.routes());

await app.listen({ port: 8000 });
