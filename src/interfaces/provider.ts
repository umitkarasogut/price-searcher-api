import { Product } from '@type/product.ts';

export default interface Provider {
  providerName: string;

  setSearchString(string: string): Provider;

  search(): Promise<Response>;

  processHtml(html: string): Product[];
}
