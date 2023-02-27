import { Signer } from 'aws-amplify';
import { AxiosRequestConfig } from 'axios';

export interface InterceptorOptions {
  service: string;
  region: string;
}

export interface ICredentials {
  accessKeyId: string;
  secretAccessKey: string;
  sessionToken?: string;
}

export const aws4Interceptor = (options: InterceptorOptions, credentials?: ICredentials) => (cfg: AxiosRequestConfig) => {
  const request = {
    method: cfg.method?.toUpperCase(),
    url: cfg.url,
    data: cfg.data,
  };
  const accessInfo = {
    access_key: credentials?.accessKeyId,
    secret_key: credentials?.secretAccessKey,
    session_token: credentials?.sessionToken,
  };
  const serviceInfo = {
    service: options.service,
    region: options.region,
  };
  const signedRequest = Signer.sign(request, accessInfo, serviceInfo);

  cfg.headers = { ...cfg.headers, ...signedRequest.headers };

  return cfg;
};
