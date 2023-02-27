import axios from 'axios';
import { EnumOperation } from '../fetch';
import { aws4Interceptor } from '../aws';

export type FetchProps = {
  baseUrl: string;
  operation: EnumOperation;
  index?: string;
  options?: RequestInit & { signOptions?: { region: string } };
}

export const doFetch = async (props: FetchProps) => {
  const {
    baseUrl,
    operation,
    index,
    options,
  } = props;
  if (options?.signOptions) {
    const interceptor = aws4Interceptor({
      region: options.signOptions.region,
      service: 'es',
    });
    axios.interceptors.request.use(interceptor);
  }
  return axios.post(
    `${baseUrl}/${index}/${operation}`,
    options?.body,
  );
};
