export type KeyedRecordOptional<T extends string, V> = {
    readonly [K in T]?: V;
};

export type KeyedRecord<T extends string, V> = {
    readonly [K in T]-?: V;
};
