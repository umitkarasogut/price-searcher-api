import { Product } from '@type/product.ts';

export default abstract class AbstractProvider {
  protected crawl(url: string) {
    console.log(`%cFetching from ${url}`, 'color:yellow');

    return fetch(url);
  }

  protected searchString = '';

  public static providerName: string;

  public static proccessHtml: (html: string) => Product;
}
