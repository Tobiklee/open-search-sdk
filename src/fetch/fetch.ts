import axios, { AxiosRequestConfig } from 'axios';
import { createSignature, createSignedRequest, SignProps, toAxios } from '../aws';
import { EnumOperation } from '../fetch';

export type FetchProps = {
  baseUrl: string;
  operation: EnumOperation;
  body?: Record<string, any>;
  index?: string;
  options?: AxiosRequestConfig & { signOptions: SignProps };
}

export const doFetch = async (props: FetchProps) => {
  const {
    baseUrl,
    operation,
    body,
    index,
    options,
  } = props;
  const url = `${baseUrl}/${index}/${operation}`;
  if (options?.signOptions) {
    const signature = await createSignature(options.signOptions);
    const signedRequest = await createSignedRequest({
      signature,
      url,
      method: 'POST',
      body: body,
    });
    return toAxios(signedRequest, url);
  }
  return axios.post(
    url,
    body,
  );
};
