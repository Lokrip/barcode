export const trapFocus = (container: HTMLElement | null) => {
    if (!container) return;

    const focusableSelectors = [
        'button', '[href]', 'input', 'select', 'textarea',
        '[tabindex]:not([tabindex="-1"])'
    ];
    const focusable = container.querySelectorAll<HTMLElement>(focusableSelectors.join(','));

    if (focusable.length) focusable[0].focus();
};
