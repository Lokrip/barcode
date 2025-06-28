import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Input } from './input'
import { forwardRef } from 'react'

describe('Input component', () => {
    it('renders input with default props', () => {
        render(<Input />)
        const input = screen.getByRole('textbox')
        expect(input).toBeInTheDocument()
        expect(input).toHaveAttribute('type', 'text')
    })

    it('renders with label', () => {
        render(<Input label="Username" />)
        expect(screen.getByText('Username')).toBeInTheDocument()
    })

    it('renders error state with message', () => {
        render(<Input error="This is required" />)
        const helper = screen.getByText('This is required')
        expect(helper.className).toContain('error')
        expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
    })

    it('renders helperText without error', () => {
        render(<Input helperText="Some hint" />)
        expect(screen.getByText('Some hint')).toBeInTheDocument()
    })

    it('disables input while loading', () => {
        render(<Input loading />)
        const input = screen.getByRole('textbox')
        expect(input).toBeDisabled()
        expect(input.className).toMatch(/loading/)
    })

    it('shows loading spinner when loading is true', () => {
        render(<Input loading />)
        const spinner = screen.getByRole('status', { hidden: true })
        expect(spinner).toBeInTheDocument()
    })

    it('renders start and end icons', () => {
        render(
            <Input
                startIcon={<span data-testid="start-icon" />}
                endIcon={<span data-testid="end-icon" />}
            />
        )
        expect(screen.getByTestId('start-icon')).toBeInTheDocument()
        expect(screen.getByTestId('end-icon')).toBeInTheDocument()
    })

    it('toggles password visibility when eyeWatch is enabled', () => {
        render(<Input type="password" eyeWatch label="Password" />)

        const input = screen.getByLabelText('Password')
        const toggle = screen.getByRole('button')

        expect(input).toHaveAttribute('type', 'password')

        fireEvent.click(toggle)
        expect(input).toHaveAttribute('type', 'text')

        fireEvent.keyDown(toggle, { key: 'Enter' })
        expect(input).toHaveAttribute('type', 'password')

        fireEvent.keyDown(toggle, { key: ' ' })
        expect(input).toHaveAttribute('type', 'text')
    })

    it('renders textarea if as prop is textarea', () => {
        render(<Input as="textarea" />)
        expect(screen.getByRole('textbox')).toBeInstanceOf(HTMLTextAreaElement)
    })

    it('supports custom components via `as`', () => {
        const CustomInput = forwardRef<HTMLInputElement>((props, ref) => (
            <input ref={ref} data-testid="custom" {...props} />
        ))
        render(<Input as={CustomInput} />)
        expect(screen.getByTestId('custom')).toBeInTheDocument()
    })

    it('calls onChange handler', () => {
        const handleChange = vi.fn()
        render(<Input onChange={handleChange} />)
        fireEvent.change(screen.getByRole('textbox'), {
            target: { value: 'test' }
        })
        expect(handleChange).toHaveBeenCalled()
    })

    it('assigns correct aria-describedby when helperText or error provided', () => {
        render(<Input helperText="Hint" />)
        const input = screen.getByRole('textbox')
        const helper = screen.getByText('Hint')
        expect(input).toHaveAttribute('aria-describedby', helper.id)
    })
})
