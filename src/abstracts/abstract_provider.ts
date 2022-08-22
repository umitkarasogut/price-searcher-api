import { Product } from '@type/product.ts';

export default abstract class AbstractProvider {
    protected crawl(url: string) {
        return fetch(url);
    }

    protected searchString = '';

    public static providerName: string;

    public static proccessHtml: (html: string) => Product;
}