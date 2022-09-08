import { Product } from "@type/product.ts";

export default abstract class AbstractProvider {
  protected crawl(url: string) {
    console.log(`%cFetching from ${url}`, 'color:yellow');

    return fetch(url);
  }

  protected verifyProducts(products: Product[]): Product[] {
    return products.filter(product => product.name && product.price && product.url && product.image);
  }

  protected searchString = '';
}
