export interface EventApiResponse<T> {
  LogId: string;
  StatusCode: string;
  Meldungen: Array<string>;
  Result: T;
}
