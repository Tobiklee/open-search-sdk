import { ICommand } from './commands';
import { SignOptions } from './fetch';
import { SearchResponse } from './models';

export interface IClient {
  /**
   * Execute given Command.
   * Right now only supports the search api.
   *
   * @param command ICommand
   */
  execute<T>(command: ICommand<T>): Promise<SearchResponse<T> | undefined>;
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
  fetchOptions?: RequestInit;

  signOptions?: SignOptions;
}

export class Client implements IClient {
  readonly endpoint: string;

  readonly fetchOptions?: RequestInit;

  readonly signOptions?: { region: string };

  constructor(props: ClientProps) {
    const {
      endpoint,
      fetchOptions,
      signOptions,
    } = props;
    this.endpoint = endpoint;
    this.fetchOptions = fetchOptions;
    this.signOptions = signOptions;
  }

  execute<T>(command: ICommand<T>): Promise<SearchResponse<T> | undefined> {
    return command.fetch(this.endpoint, this.fetchOptions);
  }
}
