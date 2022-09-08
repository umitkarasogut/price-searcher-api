import { assertInstanceOf, assertStringIncludes } from 'std/testing/asserts.ts';
import N11Provider from '@providers/n11.ts';

Deno.test('N11Provider', async () => {
    const searchString = 'iphone';
    const provider = new N11Provider();
    const response = await provider.setSearchString('iphone 13').search();

    assertInstanceOf(response, Response);

    const html = await response.text();
    const products = provider.processHtml(html);

    products.map(product => assertStringIncludes(product.name.toUpperCase(), searchString.toUpperCase()));
});