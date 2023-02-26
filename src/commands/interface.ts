import { SearchResponse } from '../models';

export interface ICommand<T> {
  fetch(baseUrl: string, fetchOptions?: RequestInit): Promise<SearchResponse<T> | undefined>;
}
