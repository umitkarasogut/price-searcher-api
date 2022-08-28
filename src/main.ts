import { Application } from "@oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import router from './router.ts';

const app = new Application();

app.use(oakCors());
app.use(router.routes());

console.info("CORS-enabled web server listening on port 8080");
await app.listen({ port: 8080 });
