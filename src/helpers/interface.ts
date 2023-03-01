import { SearchResponse } from '../../lib';

export type SearchMapper<T> = (response: SearchResponse<T>) => any;