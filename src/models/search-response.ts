export type SearchResponse<T> = {
  took: number;
  timed_out: boolean;
  _shards: Shards;
  hits: Hits<T>;
}

export type Hits<T> = {
  total: Total;
  max_score: number;
  hits: Hit<T>[];
}

export type Hit<T> = {
  _index: string;
  _id: string;
  _score: number;
  _source: T;
}

export type Total = {
  value: number;
  relation: string;
}

export type Shards = {
  total: number;
  successful: number;
  skipped: number;
  failed: number;
}
