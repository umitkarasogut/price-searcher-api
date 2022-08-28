import { Application } from "@oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import router from './router.ts';

const app = new Application();

app.use(oakCors());
app.use(router.routes());

console.info("CORS-enabled web server listening on port 8080");
await app.listen({ port: 8080 });


/*
import ProviderAbstractFactory from './abstract_factories/provider_abstract_factory.ts';
import { createHttpError } from 'std/http/http_errors.ts';
import { serve } from 'std/http/server.ts';
import { Status } from 'std/http/http_status.ts';

const handler = async (request: Request): Promise<Response> => {
  try {
    const start = performance.now();

    const { search } = await request.json();

    const results = await new ProviderAbstractFactory().search(search);

    const diff = performance.now() - start;

    console.log(`Responsed at ${diff}ms`);

    return new Response(JSON.stringify(results), {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'content-type': 'application/json',
      },
    });
  } catch (error) {
    throw createHttpError(
      Status.BadRequest,
      error.message,
      { expose: false }
    );
  }
};

await serve(handler, { port: 8080 });
*/
