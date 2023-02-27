// TODO move type from remote repository to local repository
import { QueryDslQueryContainer } from '@elastic/elasticsearch/lib/api/types';

import { ICommand } from './interface';
import { doFetch, EnumOperation, SignOptions } from '../fetch';
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
  async fetch(baseUrl: string, fetchProps?: RequestInit, signOptions?: SignOptions): Promise<SearchResponse<T> | undefined> {
    const opts: RequestInit = {
      ...{
        ...fetchProps,
        signOptions,
      },
      body: JSON.stringify(<SearchRequestBody>{
        query: this.query,
        ...this.options,
      }),
    };
    try {
      const response = await doFetch({
        ...opts,
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
