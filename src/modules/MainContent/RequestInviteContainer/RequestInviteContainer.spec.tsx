import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { RequestInviteContainer } from './RequestInviteContainer'
import { modules } from '../../../translations/en-us.json'
import userEvent from '@testing-library/user-event'
import axios from 'axios'
import { act } from 'react-dom/test-utils'

const loadFormModal = async () => {
  render(<RequestInviteContainer />)
  expect(screen.getByText(modules.mainContent.buttonText)).toBeInTheDocument()

  userEvent.click(screen.getByText(modules.mainContent.buttonText))

  await waitFor(() => {
    expect(screen.getByText(modules.inputContainer.title)).toBeInTheDocument()
  })
}

const fillForm = (email: string) => {
  const inputFullName = screen.getByTestId('input-full-name')
  const inputEmail = screen.getByTestId('input-email')
  const inputConfirmEmail = screen.getByTestId('input-confirm-email')

  act(() => {
    fireEvent.change(inputFullName, {
      target: {
        value: 'Arosha Su',
      },
    })
  })

  act(() => {
    fireEvent.change(inputEmail, {
      target: {
        value: email,
      },
    })
  })

  act(() => {
    fireEvent.change(inputConfirmEmail, {
      target: {
        value: email,
      },
    })
  })

  fireEvent.focusOut(inputFullName)
  fireEvent.focusOut(inputEmail)
  fireEvent.focusOut(inputConfirmEmail)
}

describe('RequestInviteContainer', () => {
  it('should load Request Invite button', () => {
    render(<RequestInviteContainer />)
    expect(screen.getByText(modules.mainContent.buttonText)).toBeInTheDocument()
  })

  it('should load form modal when Request Invite button is clicked', async () => {
    await loadFormModal()
  })

  it('should send the request to server and show success popup when Request Invite is sent with valid data', async () => {
    axios.post.mockResolvedValueOnce({
      data: {
        result: 'Registered',
      },
    })

    await loadFormModal()
    fillForm('aroshasu@gmail.com')

    userEvent.click(screen.getByTestId('send-button'))

    await waitFor(() => {
      expect(screen.getByTestId('sending-request')).toBeInTheDocument()
    })

    expect(axios.post).toHaveBeenCalledTimes(1)

    // Success modal
    await waitFor(() => {
      expect(screen.getByText(modules.successModal.title)).toBeInTheDocument()
      expect(
        screen.getByText(modules.successModal.description)
      ).toBeInTheDocument()
      expect(screen.getByText(modules.successModal.ok)).toBeInTheDocument()
    })

    // Close Success modal
    userEvent.click(screen.getByTestId('ok-button'))

    await waitFor(() => {
      expect(
        screen.queryByText(modules.successModal.title)
      ).not.toBeInTheDocument()
    })
  })

  it('should send the request to server and show error message from server, when user email is registered', async () => {
    const data = {
      errorMessage: 'Bad Request: Email is already in use',
    }

    axios.post.mockRejectedValueOnce({
      response: {
        data,
      },
    })

    await loadFormModal()
    fillForm('usedemail@airwallex.com')

    userEvent.click(screen.getByTestId('send-button'))

    await waitFor(() => {
      expect(screen.getByTestId('sending-request')).toBeInTheDocument()
    })

    // Error message
    await waitFor(() => {
      expect(screen.getByText(data.errorMessage)).toBeInTheDocument()
    })
  })

  it('should send the request to server and show default error message for non 400 errors', async () => {
    const data = {
      errorMessage: '',
    }

    axios.post.mockRejectedValueOnce({
      response: {
        data,
      },
    })

    await loadFormModal()
    fillForm('aroshasu@gmail.com')

    userEvent.click(screen.getByTestId('send-button'))

    await waitFor(() => {
      expect(screen.getByTestId('sending-request')).toBeInTheDocument()
    })

    // Error message
    await waitFor(() => {
      expect(
        screen.getByText(modules.errorMessages.somethingWentWrong)
      ).toBeInTheDocument()
    })
  })

  it('should not send the request to server when input data is invalid', async () => {
    axios.post.mockResolvedValueOnce({
      data: {
        result: 'Registered',
      },
    })

    await loadFormModal()

    // Invalid email
    fillForm('arosha')

    userEvent.click(screen.getByTestId('send-button'))

    expect(axios.post).not.toHaveBeenCalled()
  })
})
