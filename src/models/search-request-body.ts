import { QueryDslQueryContainer } from '@elastic/elasticsearch/lib/api/types';

/**
 * Based on https://opensearch.org/docs/latest/api-reference/search/
 */
export type SearchRequestBody = {
  /**
   * The DSL query to use in the request.
   */
  query: QueryDslQueryContainer;

  /**
   * The fields that OpenSearch should return using their docvalue forms.
   * Specify a format to return results in a certain format, such as date and time.
   */
  docvalue_fields?: Record<string, any>[];

  /**
   * The fields to search for in the request.
   * Specify a format to return results in a certain format, such as date and time.
   */
  fields?: string[];

  /**
   * Whether to return details about how OpenSearch computed the document’s score.
   * @default "false"
   */
  explain?: string;

  /**
   * The starting index to search from
   * @default 0
   */
  from?: number;

  /**
   * Scores used to boost specified indices’ scores. Specify in the format of <index> : <boost-multiplier>
   */
  indices_boost?: Record<string, any>[];

  /**
   * Specify a score threshold to return only documents above the threshold.
   */
  min_score?: number;

  /**
   * Whether to return sequence number and primary term of the last operation of each document hit.
   */
  seq_no_primary_term?: boolean;

  /**
   * How many results to return.
   * @default 10.
   */
  size?: number;

  /**
   * Whether to include the _source field in the response.
   */
  _source?: boolean;

  /**
   * Value to associate with the request for additional logging.
   */
  stats?: string;

  /**
   * The maximum number of documents OpenSearch should process before terminating the request.
   * @default 0
   */
  terminate_after?: number;

  /**
   * How long to wait for a response.
   * @default no timeout
   */
  timeout?: string;

  /**
   * Whether to include the document version in the response.
   */
  version?: string;
}
