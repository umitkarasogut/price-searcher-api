import AbstractProvider from '../abstracts/abstract_provider.ts';
import Provider from '@interfaces/provider.ts';
import { Product } from '@type/product.ts';
import { DOMParser, Element } from '@deno_dom';

export default class TrendyolProvider extends AbstractProvider implements Provider {
  public providerName = 'Trendyol';

  private url = 'https://www.trendyol.com';

  setSearchString(string: string): Provider {
    this.searchString = string.replace(' ', '%');
    return this;
  }

  search(): Promise<Response> {
    return this.crawl(`${this.url}/sr?q=${this.searchString}`);
  }

  processHtml(html: string): Product[] {
    const document = new DOMParser().parseFromString(html, 'text/html');

    if (!document) throw new Error('Document can not be null!');

    const products = ([...document.querySelectorAll('.p-card-wrppr')] as Element[]).map(element => ({
      name: element.querySelector('.prdct-desc-cntnr-name')?.textContent!,
      price: element.querySelector('.prc-cntnr .prc-box-dscntd')?.textContent!,
      url: this.url + element.querySelector('a')?.getAttribute('href')!,
      image: this.url + element.querySelector('.p-card-img-wr img.p-card-img')?.getAttribute('src')!, //TODO:this not crawling 'cause images loading lazy
    }));

    console.log(
      `%cProcessed ${products.length} ${this.providerName} product`,
      'color:blue',
    );

    return products;
  }
}
