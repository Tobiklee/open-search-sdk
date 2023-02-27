import { AxiosRequestConfig } from 'axios';
import { CreateSignatureProps } from '../aws';
import { SearchResponse } from '../models';

export type FetchOptions = AxiosRequestConfig & { signOptions: CreateSignatureProps }

export interface ICommand<T> {
  fetch(baseUrl: string, options?: FetchOptions): Promise<SearchResponse<T> | undefined>;
}
