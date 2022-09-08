import AbstractProvider from '../abstracts/abstract_provider.ts';
import Provider from '@interfaces/provider.ts';
import { Product } from '@type/product.ts';
import { DOMParser, Element } from '@deno_dom';

export default class N11Provider extends AbstractProvider implements Provider {
  public providerName = 'N11';

  private url = 'https://www.n11.com';

  setSearchString(string: string): Provider {
    this.searchString = string.replace(' ', '+');
    return this;
  }

  search(): Promise<Response> {
    return this.crawl(`${this.url}/arama?q=${this.searchString}`);
  }

  processHtml(html: string): Product[] {
    const document = new DOMParser().parseFromString(html, 'text/html');

    if (!document) throw new Error('Document can not be null!');

    const products = ([...document.querySelectorAll('ul.list-ul li.column')] as Element[]).map((element) => ({
      name: element.querySelector('.productName')?.textContent!,
      price: element.querySelector('ins')?.textContent!,
      url: element.querySelector('a.plink')?.getAttribute('href')!,
      image: element.querySelector('.imgHolder > img')?.getAttribute('data-src')!,
    }));

    console.log(
      `%cProcessed ${products.length} ${this.providerName} product`,
      'color:blue',
    );

    return this.verifyProducts(products);
  }
}
