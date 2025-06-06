export const getFallbackContent = (fallback: string): string => {
    const trimmed = fallback.trim();

    if (/^\+\d+$/.test(trimmed)) return trimmed;
    if (/^[a-zA-Z]{1,2}$/.test(trimmed)) return trimmed.toUpperCase();

    return trimmed
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((word) => word[0].toUpperCase())
        .join("");
}
