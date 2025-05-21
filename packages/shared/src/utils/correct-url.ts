export const correctUrl = (primaryUrl: string, path: string) => {
    if (!primaryUrl || !path) return '';
    if (path.startsWith("http")) return path;
    return `${primaryUrl}/${path}`;
}
