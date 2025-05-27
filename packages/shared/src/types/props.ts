export interface GenericProps<T> {
    ownerState: T;
}

export type WithSlot<T> = { slot?: keyof T } & T;
