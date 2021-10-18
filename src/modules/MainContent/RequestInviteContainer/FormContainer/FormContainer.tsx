import React, { FC } from 'react'
import { modules } from '../../../../translations/en-us.json'
import './FormContainer.css'
import { InputTextField } from './InputTextField'
import { useFormContainer } from './FormContainer.hook'
import { SendButtonContainer } from '../SendButtonContainer/SendButtonContainer'

export const FormContainer: FC = () => {
  const {
    isConfirmEmailError,
    isEmailError,
    isFullNameError,

    confirmEmail,
    email,
    fullName,

    confirmEmailError,
    emailError,
    fullNameError,

    onChangeFullName,
    onChangeEmail,
    onChangeConfirmEmail,

    validateFullName,
    validateEmail,
    validateConfirmEmail,
  } = useFormContainer()

  return (
    <div data-testid="form-container" className="form-container">
      <InputTextField
        id="input-full-name"
        isError={isFullNameError}
        label={modules.formContainer.fullName}
        validationError={fullNameError}
        value={fullName}
        onChange={onChangeFullName}
        onBlur={validateFullName}
      />
      <InputTextField
        id="input-email"
        isError={isEmailError}
        label={modules.formContainer.email}
        validationError={emailError}
        value={email}
        onChange={onChangeEmail}
        onBlur={validateEmail}
      />
      <InputTextField
        id="input-confirm-email"
        isError={isConfirmEmailError}
        label={modules.formContainer.confirmEmail}
        validationError={confirmEmailError}
        value={confirmEmail}
        onChange={onChangeConfirmEmail}
        onBlur={validateConfirmEmail}
      />
      <SendButtonContainer
        fullName={fullName}
        email={email}
        confirmEmail={confirmEmail}
        isValid={!isFullNameError && !isEmailError && !isConfirmEmailError}
      />
    </div>
  )
}
