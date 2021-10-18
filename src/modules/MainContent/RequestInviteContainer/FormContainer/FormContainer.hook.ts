import { useState, ChangeEvent } from 'react'
import { modules } from '../../../../translations/en-us.json'
import { FormHook } from './FormContainer.types'

export const useFormContainer: FormHook = () => {
  const [isFullNameError, setIsFullNameError] = useState(false)
  const [isEmailError, setIsEmailError] = useState(false)
  const [isConfirmEmailError, setIsConfirmEmailError] = useState(false)

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [confirmEmail, setConfirmEmail] = useState('')

  const [fullNameError, setFullNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [confirmEmailError, setConfirmEmailError] = useState('')

  const onChangeFullName = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setFullName(e.target.value)

    if (isFullNameError) {
      validateFullName(e.target.value)
    }
  }

  const onChangeEmail = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setEmail(e.target.value)

    if (isEmailError) {
      validateEmail(e.target.value)
    }

    if (confirmEmail) {
      validateConfirmEmail(confirmEmail, e.target.value)
    }
  }

  const onChangeConfirmEmail = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setConfirmEmail(e.target.value)

    if (isConfirmEmailError) {
      validateConfirmEmail(e.target.value)
    }
  }

  const validateFullName = (fullNameInput = fullName) => {
    if (!fullNameInput || fullNameInput.trim().length < 3) {
      setIsFullNameError(true)
      setFullNameError(modules.errorMessages.fullNameLengthError)
      return
    }

    setIsFullNameError(false)
    setFullNameError('')
  }

  const validateEmail = (emailInput = email) => {
    if (!emailInput || !emailInput.trim()) {
      setIsEmailError(true)
      setEmailError(modules.errorMessages.emptyError)
      return
    }

    if (!/^.+@.+\..+/.test(emailInput)) {
      setIsEmailError(true)
      setEmailError(modules.errorMessages.emailError)
      return
    }

    setIsEmailError(false)
    setEmailError('')
  }

  const validateConfirmEmail = (
    confirmEmailInput = confirmEmail,
    emailInput = email
  ) => {
    if (!confirmEmailInput || !confirmEmailInput.trim()) {
      setIsConfirmEmailError(true)
      setConfirmEmailError(modules.errorMessages.emptyError)
      return
    }

    if (emailInput !== confirmEmailInput) {
      setIsConfirmEmailError(true)
      setConfirmEmailError(modules.errorMessages.confirmEmailError)
      return
    }

    setIsConfirmEmailError(false)
    setConfirmEmailError('')
  }

  return {
    isFullNameError,
    isEmailError,
    isConfirmEmailError,

    fullName,
    email,
    confirmEmail,

    fullNameError,
    emailError,
    confirmEmailError,

    onChangeConfirmEmail,
    onChangeEmail,
    onChangeFullName,
    validateConfirmEmail,
    validateEmail,
    validateFullName,
  }
}
