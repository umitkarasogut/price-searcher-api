import { assertInstanceOf, assertStringIncludes } from 'std/testing/asserts.ts';
import HepsiburadaProvider from '@providers/hepsiburada.ts';

Deno.test('HepsiburadaProvider', async () => {
    const searchString = 'iphone';
    const provider = new HepsiburadaProvider();
    const response = await provider.setSearchString('iphone 13').search();

    assertInstanceOf(response, Response);

    const html = await response.text();
    const products = provider.processHtml(html);

    products.map(product => assertStringIncludes(product.name.toUpperCase(), searchString.toUpperCase()));
});