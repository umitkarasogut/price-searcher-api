export default interface Provider {
  setSearchString(string: string): Provider;

  search(): Promise<Response>;
}
