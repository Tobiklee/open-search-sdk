import { SearchResponse } from '../models';

export type SearchMapper<T> = (response: SearchResponse<T>) => any;