import AbstractProvider from '../abstracts/abstract_provider.ts';
import Provider from '@interfaces/provider.ts';
import { Product } from '@type/product.ts';
import { DOMParser, Element } from '@deno_dom';

export default class N11Provider extends AbstractProvider implements Provider {
  public providerName = 'Amazon';

  private url = 'https://www.amazon.com.tr';

  setSearchString(string: string): Provider {
    this.searchString = string.replace(' ', '+');
    return this;
  }

  search(): Promise<Response> {
    return this.crawl(`${this.url}/s?k=${this.searchString}`);
  }

  processHtml(html: string): Product[] {
    const document = new DOMParser().parseFromString(html, 'text/html');

    if (!document) throw new Error('Document can not be null!');

    const products = ([...document.querySelectorAll('div.s-main-slot.s-result-list.s-search-results.sg-row div:not(.AdHolder).sg-col-4-of-12.s-result-item.s-asin.sg-col-4-of-16.sg-col.s-widget-spacing-small.sg-col-4-of-20')] as Element[]).map((element) => ({
      name: element.querySelector('div.a-section.a-spacing-small.puis-padding-left-small.puis-padding-right-small > div.a-section.a-spacing-none.a-spacing-top-small.s-title-instructions-style > h2 > a > span')?.textContent!,
      price: element.querySelector('.a-offscreen')?.textContent!,
      url: this.url + element.querySelector('div.a-section.a-spacing-small.puis-padding-left-small.puis-padding-right-small > div.a-section.a-spacing-none.a-spacing-top-small.s-title-instructions-style > h2 > a')?.getAttribute('href')!,
      image: element.querySelector('.s-image')?.getAttribute('src')!,
    }));

    console.log(
      `%cProcessed ${products.length} ${this.providerName} product`,
      'color:blue',
    );

    return this.verifyProducts(products);
  }
}
