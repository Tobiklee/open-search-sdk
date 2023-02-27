import { HttpRequest } from '@aws-sdk/types';
import axios, { AxiosResponse, Method } from 'axios';

export const toAxios = async <T>(request: HttpRequest, url: string): Promise<AxiosResponse<T>> => {
  return axios.request<T>({
    method: request.method as Method,
    url: url,
    data: request.body,
    headers: request.headers,
  });
};
