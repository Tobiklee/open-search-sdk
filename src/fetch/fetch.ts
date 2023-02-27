import axios from 'axios';
import { createSignature, createSignedRequest, toAxios } from '../aws';
import { FetchOptions } from '../commands';
import { EnumOperation } from '../fetch';

export type FetchProps = {
  baseUrl: string;
  operation: EnumOperation;
  body?: Record<string, any>;
  index?: string;
  options?: FetchOptions;
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
    const signature = createSignature(options.signOptions);
    const signedRequest = await createSignedRequest({
      signature,
      url,
      method: 'POST',
      body,
    });
    return toAxios(signedRequest, url);
  }
  return axios.post(
    url,
    body,
  );
};
