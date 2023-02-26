export type SearchResponse<T> = {
  took: number;
  timedOut: boolean;
  shards: Shards;
  hits: Hits<T>;
}

export type Hits<T> = {
  total: Total;
  maxScore: number;
  hits: Hit<T>[];
}

export type Hit<T> = {
  index: string;
  id: string;
  score: number;
  source: Source<T>;
}

export type Source<T> = {
  [key: string]: T[];
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
