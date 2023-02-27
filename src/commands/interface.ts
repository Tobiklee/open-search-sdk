import { FetchProps } from '../fetch';
import { SearchResponse } from '../models';

export interface ICommand<T> {
  fetch(baseUrl: string, fetchOptions?: FetchProps): Promise<SearchResponse<T> | undefined>;
}
