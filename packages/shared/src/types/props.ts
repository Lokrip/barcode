export interface GenericProps<T> {
    ownerState: T;
}

export type WithSlot<T> = { slot?: keyof T } & T;

export type Size = {
    width?: number;
    height?: number;
};

export type WithSlotProp = { slot?: string };
