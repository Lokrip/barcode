export const truncate_string = (str: string, length: number) => {
    return str.length > length ? str.slice(0, length - 3) + "..." : str;
}
