import axios from 'axios';
import { aws4Interceptor, Credentials } from '../aws';
import { EnumOperation } from '../fetch';

export type SignOptions = Credentials & {
  region: string;
}

export type FetchProps = {
  baseUrl: string;
  operation: EnumOperation;
  index?: string;
  options?: RequestInit & { signOptions?: SignOptions };
}

export const doFetch = async (props: FetchProps) => {
  const {
    baseUrl,
    operation,
    index,
    options,
  } = props;
  if (options?.signOptions) {
    const interceptor = aws4Interceptor(
      {
        region: options.signOptions.region,
        service: 'es',
      },
      options.signOptions,
    );
    axios.interceptors.request.use(interceptor);
  }
  return axios.post(
    `${baseUrl}/${index}/${operation}`,
    options?.body,
  );
};
