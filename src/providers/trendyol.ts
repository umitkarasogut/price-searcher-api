import AbstractProvider from '../abstracts/abstract_provider.ts';
import Provider from '@interfaces/provider.ts';
import { Product } from '@type/product.ts';

export default class TrendyolProvider extends AbstractProvider implements Provider {
    public static providerName = 'Trendyol';

    protected url = '';

    setSearchString(string: string): Provider {
        this.searchString = string;
        return this;
    }

    search(): Promise<Response> {
        return this.crawl(`${this.url}/sr?q=${this.searchString}`);
    }

    public static processHtml(): Product {
        return {
            name: 'Trendyol Prod',
            price: 100,
            url: 'trendyol-url',
            image: 'trendyol-resim-url'
        };
    }
}