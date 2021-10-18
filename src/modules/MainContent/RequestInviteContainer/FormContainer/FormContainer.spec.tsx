import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { FormContainer } from './FormContainer'
import userEvent from '@testing-library/user-event'
import { modules } from '../../../../translations/en-us.json'

describe('FormContainer', () => {
  it('should load form container component', () => {
    render(<FormContainer />)
    expect(screen.getByTestId('form-container')).toBeInTheDocument()
  })

  it('should load input fields and send button', () => {
    render(<FormContainer />)
    expect(screen.getByTestId('input-full-name')).toBeInTheDocument()
    expect(screen.getByTestId('input-email')).toBeInTheDocument()
    expect(screen.getByTestId('input-confirm-email')).toBeInTheDocument()
    expect(screen.getByTestId('send-button')).toBeInTheDocument()
  })

  it('should give validation errors when full name is less than 3 characters', async () => {
    render(<FormContainer />)
    const inputFullName = screen.getByTestId('input-full-name')

    act(() => {
      fireEvent.change(inputFullName, {
        target: {
          value: 'aa',
        },
      })
    })
    fireEvent.focusOut(inputFullName)

    await waitFor(() => {
      expect(
        screen.getByText(modules.errorMessages.fullNameLengthError)
      ).toBeInTheDocument()
    })
  })

  it('should give validation errors when email is empty', async () => {
    render(<FormContainer />)
    const inputEmail = screen.getByTestId('input-email')

    act(() => {
      fireEvent.change(inputEmail, {
        target: {
          value: '',
        },
      })
    })
    fireEvent.focusOut(inputEmail)

    await waitFor(() => {
      expect(
        screen.getByText(modules.errorMessages.emptyError)
      ).toBeInTheDocument()
    })
  })

  it('should give validation errors when email is invalid', async () => {
    render(<FormContainer />)
    const inputEmail = screen.getByTestId('input-email')

    act(() => {
      fireEvent.change(inputEmail, {
        target: {
          value: 'aroshasu',
        },
      })
    })
    fireEvent.focusOut(inputEmail)

    await waitFor(() => {
      expect(
        screen.getByText(modules.errorMessages.emailError)
      ).toBeInTheDocument()
    })
  })

  it('should give validation errors when email is not same as confirm email', async () => {
    render(<FormContainer />)
    const inputEmail = screen.getByTestId('input-email')
    const inputConfirmEmail = screen.getByTestId('input-confirm-email')

    act(() => {
      fireEvent.change(inputEmail, {
        target: {
          value: 'aroshasu',
        },
      })
    })

    act(() => {
      fireEvent.change(inputConfirmEmail, {
        target: {
          value: 'aroshasuNotSame',
        },
      })
    })
    fireEvent.focusOut(inputConfirmEmail)

    await waitFor(() => {
      expect(
        screen.getByText(modules.errorMessages.confirmEmailError)
      ).toBeInTheDocument()
    })
  })

  it('should show `fill above fields` message when some fields are empty', async () => {
    render(<FormContainer />)
    userEvent.click(screen.getByTestId('send-button'))

    await waitFor(() => {
      expect(
        screen.getByText(modules.errorMessages.fillFieldsError)
      ).toBeInTheDocument()
    })
  })

  it('should give error message when trying to send details with validations', async () => {
    render(<FormContainer />)
    const inputFullName = screen.getByTestId('input-full-name')
    const inputEmail = screen.getByTestId('input-email')
    const inputConfirmEmail = screen.getByTestId('input-confirm-email')

    act(() => {
      fireEvent.change(inputFullName, {
        target: {
          value: 'ar',
        },
      })
    })

    act(() => {
      fireEvent.change(inputEmail, {
        target: {
          value: 'aroshasu',
        },
      })
    })

    act(() => {
      fireEvent.change(inputConfirmEmail, {
        target: {
          value: 'aroshasu',
        },
      })
    })

    fireEvent.focusOut(inputFullName)
    fireEvent.focusOut(inputEmail)
    fireEvent.focusOut(inputConfirmEmail)

    userEvent.click(screen.getByTestId('send-button'))

    await waitFor(() => {
      expect(
        screen.getByText(modules.errorMessages.validationError)
      ).toBeInTheDocument()
    })
  })
})
