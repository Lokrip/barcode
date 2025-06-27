import { render, screen, fireEvent } from '@testing-library/react'
import { Switch } from './switch'
import { describe, it, expect, vi } from 'vitest'

import { renderHook, act } from '@testing-library/react';
import { forwardRef, MouseEvent, KeyboardEvent } from 'react';
import { useSwitch } from './model/useSwitch';

describe('Switch component', () => {
    it('renders with default props', () => {
        render(<Switch defaultChecked={false} />)
        const element = screen.getByRole('switch')
        expect(element).toBeInTheDocument()
        expect(element).toHaveAttribute('tabIndex', '0')
    })

    it('renders with defaultChecked true', () => {
        render(<Switch defaultChecked />)
        const element = screen.getByRole('switch')
        expect(element.className).toMatch(/checked/)
    })

    it('renders as input element', () => {
        render(<Switch as="input" defaultChecked />)
        const input = screen.getByRole('checkbox')
        expect(input).toBeInstanceOf(HTMLInputElement)
        expect((input as HTMLInputElement).checked).toBe(true)
    })

    it('calls onChange when clicked (uncontrolled)', () => {
        const onChange = vi.fn()
        render(<Switch defaultChecked={false} onChange={onChange} />)
        const element = screen.getByRole('switch')
        fireEvent.click(element)
        expect(onChange).toHaveBeenCalled()
    })

    it('calls onChange when toggled via Enter key', () => {
        const onChange = vi.fn()
        render(<Switch defaultChecked={false} onChange={onChange} />)
        const element = screen.getByRole('switch')
        fireEvent.keyDown(element, { key: 'Enter' })
        expect(onChange).toHaveBeenCalled()
    })

    it('calls onChange when toggled via Space key', () => {
        const onChange = vi.fn()
        render(<Switch defaultChecked={false} onChange={onChange} />)
        const element = screen.getByRole('switch')
        fireEvent.keyDown(element, { key: ' ' })
        expect(onChange).toHaveBeenCalled()
    })

    it('does not toggle when disabled', () => {
        const onChange = vi.fn()
        render(<Switch defaultChecked={true} disabled onChange={onChange} />)
        const element = screen.getByRole('switch')
        expect(element.className).toMatch(/disabled/)
        fireEvent.click(element)
        expect(onChange).not.toHaveBeenCalled()
    })

    it('renders with correct size and color classes', () => {
        render(<Switch defaultChecked size="large" color="secondary" />)
        const element = screen.getByRole('switch')
        expect(element.className).toMatch(/large/)
        expect(element.className).toMatch(/secondary/)
    })

    it('respects controlled checked prop', () => {
        const { rerender } = render(<Switch checked={false} onChange={() => {}} />)
        const element = screen.getByRole('switch')
        expect(element.className).not.toMatch(/checked/)
        rerender(<Switch checked={true} onChange={() => {}} />)
        expect(element.className).toMatch(/checked/)
    })

    it('supports custom components via `as`', () => {
        const Custom = forwardRef<HTMLDivElement>((props, ref) => (
            <div ref={ref} data-testid="custom-switch" {...props} />
        ))
        render(<Switch as={Custom} defaultChecked />)
        expect(screen.getByTestId('custom-switch')).toBeInTheDocument()
    })
})

describe('useSwitch hook', () => {
    it('should use defaultChecked as initial state when uncontrolled', () => {
        const { result } = renderHook(() => useSwitch({ defaultChecked: true }));
        expect(result.current.isChecked).toBe(true);
    });

    it('should use controlled checked value if provided', () => {
        const { result } = renderHook(() => useSwitch({ checked: true }));
        expect(result.current.isChecked).toBe(true);
    });

    it('should toggle internal state on toggle when uncontrolled', () => {
        const { result } = renderHook(() => useSwitch({ defaultChecked: false }));
        act(() => {
            result.current.toggle({} as MouseEvent);
        });
        expect(result.current.isChecked).toBe(true);
    });

    it('should call onChange with synthetic event on toggle', () => {
        const onChange = vi.fn();
        const { result } = renderHook(() => useSwitch({ defaultChecked: false, onChange }));

        act(() => {
            result.current.toggle({} as MouseEvent);
        });

        expect(onChange).toHaveBeenCalled();
        const eventArg = onChange.mock.calls[0][0];
        expect(eventArg.target.checked).toBe(true);
    });

    it('should not toggle or call onChange if disabled', () => {
        const onChange = vi.fn();
        const { result } = renderHook(() => useSwitch({ defaultChecked: false, onChange, disabled: true }));

        act(() => {
            result.current.toggle({} as MouseEvent);
        });

        expect(result.current.isChecked).toBe(false);
        expect(onChange).not.toHaveBeenCalled();
    });

    it('should toggle on keyToggle with Space or Enter key when enabled', () => {
        const onChange = vi.fn();
        const { result } = renderHook(() => useSwitch({ defaultChecked: false, onChange }));

        const spaceEvent = {
            key: ' ',
            preventDefault: vi.fn(),
        } as unknown as KeyboardEvent;

        act(() => {
            result.current.keyToggle(spaceEvent);
        });

        expect(spaceEvent.preventDefault).toHaveBeenCalled();
        expect(result.current.isChecked).toBe(true);
        expect(onChange).toHaveBeenCalled();

        const enterEvent = {
            key: 'Enter',
            preventDefault: vi.fn(),
        } as unknown as KeyboardEvent;

        act(() => {
            result.current.keyToggle(enterEvent);
        });

        expect(enterEvent.preventDefault).toHaveBeenCalled();
        expect(result.current.isChecked).toBe(false);
        expect(onChange).toHaveBeenCalledTimes(2);
    });

    it('should not toggle on keyToggle with other keys', () => {
        const onChange = vi.fn();
        const { result } = renderHook(() => useSwitch({ defaultChecked: false, onChange }));

        const otherKeyEvent = {
            key: 'a',
            preventDefault: vi.fn(),
        } as unknown as KeyboardEvent;

        act(() => {
            result.current.keyToggle(otherKeyEvent);
        });

        expect(otherKeyEvent.preventDefault).not.toHaveBeenCalled();
        expect(result.current.isChecked).toBe(false);
        expect(onChange).not.toHaveBeenCalled();
    });

    it('should not toggle on keyToggle if disabled', () => {
        const onChange = vi.fn();
        const { result } = renderHook(() => useSwitch({ defaultChecked: false, onChange, disabled: true }));

        const spaceEvent = {
            key: ' ',
            preventDefault: vi.fn(),
        } as unknown as KeyboardEvent;

        act(() => {
            result.current.keyToggle(spaceEvent);
        });

        expect(spaceEvent.preventDefault).not.toHaveBeenCalled();
        expect(result.current.isChecked).toBe(false);
        expect(onChange).not.toHaveBeenCalled();
    });
});
