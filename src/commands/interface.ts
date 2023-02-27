import { SignOptions } from '../fetch';
import { SearchResponse } from '../models';

export interface ICommand<T> {
  fetch(baseUrl: string, fetchOptions?: RequestInit, signOptions?: SignOptions): Promise<SearchResponse<T> | undefined>;
}
