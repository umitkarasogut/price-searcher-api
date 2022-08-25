import AbstractProvider from '../abstracts/abstract_provider.ts';
import Provider from '@interfaces/provider.ts';
import { Product } from '@type/product.ts';
import { DOMParser, Element } from '@deno_dom';

export default class HepsiburadaProvider extends AbstractProvider implements Provider {
  public providerName = 'Hepsiburada';

  public url = 'https://www.hepsiburada.com';

  setSearchString(string: string): Provider {
    this.searchString = string.replace(' ', '+');
    return this;
  }

  search(): Promise<Response> {
    return this.crawl(`${this.url}/ara?q=${this.searchString}`);
  }

  public processHtml(html: string): Product[] {
    const document = new DOMParser().parseFromString(html, 'text/html');

    if (!document) throw new Error('Document can not be null!');

    const products = ([...document.querySelectorAll('ul.productListContent-wrapper li.productListContent-item')] as Element[]).map((element) => ({
      name: document.querySelector("[data-test-id='product-card-name']")?.textContent!,
      price: element.querySelector("[data-test-id='price-current-price']")?.textContent!,
      url: this.url + element.querySelector('a')?.getAttribute('href')!,
      image: this.url + element.querySelector("[data-test-id='product-image-image'] > pricture > source")?.getAttribute('srcset')!, //TODO:this not crawling
    }));

    console.log(
      `%cProcessed ${products.length} ${this.providerName} product`,
      'color:blue',
    );

    return products;
  }
}
