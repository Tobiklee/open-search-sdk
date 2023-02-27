import { AxiosRequestConfig } from 'axios';
import { SignProps } from '../aws';
import { SearchResponse } from '../models';

export type FetchOptions = AxiosRequestConfig & { signOptions: SignProps }

export interface ICommand<T> {
  fetch(baseUrl: string, options?: FetchOptions): Promise<SearchResponse<T> | undefined>;
}
