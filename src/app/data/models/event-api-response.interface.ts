export interface ApiResponse<T> {
  LogId: string;
  StatusCode: string;
  Meldungen: Array<string>;
  Result: T;
}
