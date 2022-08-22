import TrendyolProvider from '@providers/trendyol.ts';
import HepsiburadaProvider from '@providers/hepsiburada.ts';

export default class ProviderAbstractFactory {

    private providers = [
        TrendyolProvider, HepsiburadaProvider
    ];

    async search(string: string) {

        const requests = this.providers.map(providerInstance => new providerInstance().setSearchString(string).search());

        const responses = await Promise.all(requests);

        const htmls = await Promise.all(responses.map(response => response.text()));

        return htmls.map((html, index) => ({
            provider: this.providers[index].providerName,
            product: this.providers[index].processHtml(html)
        }));
    }
}