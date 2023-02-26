import { SearchResponse } from '../models';

export interface ICommand<T> {
  fetch(baseUrl: string, fetchOptions?: RequestInit, signOptions?: { region: string }): Promise<SearchResponse<T> | undefined>;
}
