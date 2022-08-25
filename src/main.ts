import ProviderAbstractFactory from './abstract_factories/provider_abstract_factory.ts';
import { serve } from 'std/http/server.ts';

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
        'content-type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify(error.message), { status: 500 });
  }
};

await serve(handler, { port: 8080 });
