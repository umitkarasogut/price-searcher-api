import TrendyolProvider from "@providers/trendyol.ts";
import HepsiburadaProvider from "@providers/hepsiburada.ts";

export default class ProviderAbstractFactory {
  private providers = [
    TrendyolProvider,
    HepsiburadaProvider,
  ];

  async search(string: string) {
    const requests = this.providers.map((providerInstance) =>
      new providerInstance().setSearchString(string).search()
    );

    const responses = await Promise.all(requests);

    responses.map((response, index) =>
      console.log(
        `%cFetched from ${
          this.providers[index].providerName
        } with ${response.status} status code`,
        `color:${response.ok ? "green" : "red"}`,
      )
    );

    const htmls = await Promise.all(
      responses.map((response) => response.text()),
    );

    return htmls.map((html, index) => ({
      provider: this.providers[index].providerName,
      products: this.providers[index].processHtml(html),
    }));
  }
}
