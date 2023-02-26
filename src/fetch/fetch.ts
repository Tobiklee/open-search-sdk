import { EnumHttpOperation, EnumOperation } from '../fetch';

export type FetchProps = {
  baseUrl: string;
  operation: EnumOperation;
  index?: string;
  options?: RequestInit;
}

export const doFetch = async (props: FetchProps) => {
  const {
    baseUrl,
    operation,
    index,
    options,
  } = props;
  return fetch(
    `${baseUrl}/${index}/${operation}`,
    {
      method: EnumHttpOperation.Post,
      ...options,
    });
};
