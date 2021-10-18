import React, { useState, FC } from 'react'
import axios from 'axios'

import { modules } from '../../../../translations/en-us.json'
import { Button, CircularProgress } from '@mui/material'
import { Send } from '@mui/icons-material'
import './SendButtonContainer.css'
import { ApiError, SendButtonContainerProps } from './SendButtonContainer.types'
import { useModalContext } from '../ModalContainer/FormModalContext'

export const SendButtonContainer: FC<SendButtonContainerProps> = ({
  fullName,
  email,
  confirmEmail,
  isValid,
}: SendButtonContainerProps) => {
  const apiUrl = process.env.REACT_APP_API_URL as string
  const [errorMessage, setErrorMessage] = useState('')
  const [isPending, setIsPending] = useState(false)

  const { successRequest } = useModalContext()

  const onSubmit = async () => {
    if (!isValid) {
      setErrorMessage(modules.errorMessages.validationError)
      return
    }

    if (!fullName || !email || !confirmEmail) {
      setErrorMessage(modules.errorMessages.fillFieldsError)
      return
    }

    await sendAPI()
  }

  const sendAPI = async () => {
    const inputData = { name: fullName, email: email }

    try {
      setIsPending(true)
      setErrorMessage('')

      await axios.post(apiUrl, inputData)
      setIsPending(false)

      successRequest()
    } catch ({ response }) {
      setIsPending(false)

      const apiError = response as ApiError
      setErrorMessage(
        apiError?.data?.errorMessage || modules.errorMessages.somethingWentWrong
      )
    }
  }

  return (
    <>
      <Button
        variant="contained"
        color="success"
        size="large"
        data-testid="send-button"
        className="send-button"
        endIcon={
          isPending ? (
            <CircularProgress
              data-testid="sending-request"
              color="inherit"
              size="1.2rem"
            />
          ) : (
            <Send />
          )
        }
        onClick={onSubmit}
      >
        {modules.formContainer.send}
      </Button>
      <div className="api-error-container">{errorMessage}</div>
    </>
  )
}
