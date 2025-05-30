export type KeyedRecord<T extends string> = {
  readonly [K in T]?: string;
};
