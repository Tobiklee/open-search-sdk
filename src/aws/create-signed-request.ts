import { SignatureV4 } from '@aws-sdk/signature-v4';
import { HttpRequest } from '@aws-sdk/types';

export type HttpMethod =
  'GET'
  | 'DELETE'
  | 'HEAD'
  | 'OPTIONS'
  | 'POST'
  | 'PUT'
  | 'PATCH'
  | 'PURGE'
  | 'LINK'
  | 'UNLINK';

export type CreateSignedRequestProps = {
  method: HttpMethod;
  url: string;
  signature: SignatureV4;
  body?: Record<string, any>;
}
export const createSignedRequest = async (props: CreateSignedRequestProps): Promise<HttpRequest> => {
  const {
    method,
    url,
    signature,
    body,
  } = props;
  const apiUrl = new URL(url);
  return signature.sign({
    method,
    hostname: apiUrl.host,
    path: apiUrl.pathname,
    protocol: apiUrl.protocol,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      'host': apiUrl.hostname, // compulsory
    },
  });
};
