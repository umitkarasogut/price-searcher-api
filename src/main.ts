import ProviderAbstractFactory from "./abstract_factories/provider_abstract_factory.ts";
import { serve } from "std/http/server.ts";

const port = 8080;

const handler = async (request: Request): Promise<Response> => {
    const searchString = new URL(request.url).searchParams.get('search');

    if (!searchString) return new Response('Seacrh Param Missing !', { status: 422 });

    const results = await new ProviderAbstractFactory().search(searchString)

    return new Response(JSON.stringify(results), { status: 200 });
};

console.log(`HTTP webserver running. Access it at: http://localhost:8080/`);
await serve(handler, { port });
