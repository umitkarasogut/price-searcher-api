import TrendyolProvider from '@providers/trendyol.ts';
import HepsiburadaProvider from '@providers/hepsiburada.ts';

export default class ProviderAbstractFactory {
  private providers = [
    TrendyolProvider,
    HepsiburadaProvider,
  ];

  async search(string: string) {

    const providerInstances = this.providers.map(providerInstance => new providerInstance());

    const requests = providerInstances.map(providerInstance => providerInstance.setSearchString(string).search());

    const responses = await Promise.all(requests);

    responses.map((response, index) => console.log(
      `%cFetched from ${providerInstances[index].providerName} with ${response.status} status code`,
      `color:${response.ok ? 'green' : 'red'}`
    ));

    const htmls = await Promise.all(
      responses.map((response) => response.text()),
    );

    return htmls.map((html, index) => ({
      provider: providerInstances[index].providerName,
      products: providerInstances[index].processHtml(html),
    }));
  }
}
