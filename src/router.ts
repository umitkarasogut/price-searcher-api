import { Request, Response, Router } from "@oak/mod.ts";
import ProviderAbstractFactory from '@abstract_factories/provider_abstract_factory.ts';

const router = new Router();

router.post('/', async ({ request, response }: { request: Request; response: Response }) => {
    try {
        const start = performance.now();

        const { search } = await request.body().value

        const results = await new ProviderAbstractFactory().search(search);

        const diff = performance.now() - start;

        console.log(`Responsed at ${diff}ms`);

        response.status = 200;
        response.body = results;
        return;

    } catch (error) {
        console.error(error);
        response.status = 500;
        response.body = error.message;
        return;
    }
})

export default router;