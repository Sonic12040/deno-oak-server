import { Context } from "../../deps.ts";

export async function logger(ctx: Context, next: () => Promise<void>) {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
}
