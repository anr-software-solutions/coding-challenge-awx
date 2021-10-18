import { ChangeEvent } from 'react'

export type FormHook = () => {
  isEmailError: boolean
  onChangeConfirmEmail: (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void
  fullNameError: string
  emailError: string
  confirmEmailError: string
  fullName: string
  confirmEmail: string
  isFullNameError: boolean
  validateEmail: (emailInput?: string) => void
  onChangeEmail: (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void
  onChangeFullName: (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void
  isConfirmEmailError: boolean
  validateConfirmEmail: (confirmEmailInput?: string) => void
  email: string
  validateFullName: (fullNameInput?: string) => void
}
