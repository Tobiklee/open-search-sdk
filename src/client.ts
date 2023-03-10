import { FetchOptions, ICommand } from './commands';
import { SearchResponse } from './models';

export interface IClient {
  /**
   * Execute given Command.
   * Right now only supports the search api.
   *
   * @param command ICommand
   */
  execute<T>(command: ICommand<T>): Promise<SearchResponse<T> | void>;
}

export type ClientProps = {
  /**
   * Endpoint of your open search instance. Include the port if you use localhost.
   *
   * @example
   *  https://open-search-1234.eu-central-1.es.amazonaws.com
   */
  endpoint: string;

  /**
   * Inject fetch options. Options will be attached to every request.
   */
  fetchOptions?: FetchOptions;
}

export class Client implements IClient {
  readonly endpoint: string;

  private readonly fetchOptions?: FetchOptions;

  constructor(props: ClientProps) {
    const {
      endpoint,
      fetchOptions,
    } = props;
    this.endpoint = endpoint;
    this.fetchOptions = fetchOptions;
  }

  execute<T>(command: ICommand<T>): Promise<SearchResponse<T> | void> {
    return command.fetch(this.endpoint, this.fetchOptions);
  }
}
