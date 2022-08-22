import AbstractProvider from '../abstracts/abstract_provider.ts';
import Provider from '@interfaces/provider.ts';
import { Product } from '@type/product.ts';

export default class HepsiburadaProvider extends AbstractProvider implements Provider {
    public static providerName = 'Hepsiburada';

    protected url = '';

    setSearchString(string: string): Provider {
        this.searchString = string;
        return this;
    }

    search(): Promise<Response> {
        return this.crawl(`${this.url}/ara?q=${this.searchString}`)
    }

    public static processHtml(html: string): Product {
        return {
            name: 'Hepsiburada Prod',
            price: 19000,
            url: 'hepsiburada-url',
            image: 'hepsiburada-resim-url'
        };
    }
}