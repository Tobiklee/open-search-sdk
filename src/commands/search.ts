// TODO move type from remote repository to local repository
import { QueryDslQueryContainer } from '@elastic/elasticsearch/lib/api/types';
import { FetchOptions, ICommand } from './interface';
import { doFetch, EnumOperation } from '../fetch';
import { SearchResponse } from '../models';
import { SearchRequestBody } from '../models/search-request-body';

export type SearchCommandProps = {
  query: QueryDslQueryContainer;
  index?: string;
  options?: Omit<SearchRequestBody, 'query'>;
}

export class SearchCommand<T> implements ICommand<T> {
  readonly query: Record<string, any>;
  readonly index?: string;
  readonly options?: Omit<SearchRequestBody, 'query'>;

  constructor(props: SearchCommandProps) {
    const {
      index,
      query,
      options,
    } = props;
    this.index = index;
    this.query = query;
    this.options = options;
  }

  // TODO include error handling
  async fetch(baseUrl: string, options?: FetchOptions): Promise<SearchResponse<T> | undefined> {
    try {
      const response = await doFetch({
        ...options,
        baseUrl: baseUrl,
        index: this.index,
        operation: EnumOperation.Search,
      });
      if (response.status === 200) {
        return response.data as SearchResponse<T>;
      }
      return undefined;
    } catch (e) {
      console.error(e);
      return undefined;
    }
  }
}
