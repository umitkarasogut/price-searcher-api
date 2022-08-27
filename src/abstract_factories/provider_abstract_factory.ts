import Provider from '@interfaces/provider.ts';

export default class ProviderAbstractFactory {
  private readonly providersPath = `${Deno.cwd()}/src/providers`;

  async search(string: string) {
    const providerModules: Promise<{ default: new () => Provider }>[] = [];

    for await (const provider of Deno.readDir(this.providersPath)) {
      if (provider.isFile) {
        providerModules.push(import(`${this.providersPath}/${provider.name}`));
      }
    }

    const providers = (await Promise.all(providerModules)).map(provider => new provider.default());

    const requests = providers.map(providerInstance => providerInstance.setSearchString(string).search());

    const responses = await Promise.all(requests);

    responses.map((response, index) => console.log(
      `%cFetched from ${providers[index].providerName} with ${response.status} status code`,
      `color:${response.ok ? 'green' : 'red'}`
    ));

    const htmls = await Promise.all(
      responses.map((response) => response.text()),
    );

    return htmls.map((html, index) => ({
      provider: providers[index].providerName,
      products: providers[index].processHtml(html),
    }));
  }
}
