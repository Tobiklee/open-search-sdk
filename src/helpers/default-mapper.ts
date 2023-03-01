import { SearchResponse } from '../models';

export type DefaultMapperResult<T> = {
  size: number;
  items: T[];
}

export const defaultMapper = <T>(response: SearchResponse<T>): DefaultMapperResult<T> => {
  return {
    size: response.hits.total.value,
    items: response.hits.hits.map((item) => ({
      ...item._source,
    })),
  };
};