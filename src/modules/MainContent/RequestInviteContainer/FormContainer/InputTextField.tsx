import React, { FC, ChangeEvent } from 'react'
import { TextField } from '@mui/material'
import './FormContainer.css'

interface Props {
  isError: boolean
  id: string
  label: string
  validationError: string
  value: string
  type?: string
  onChange: (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
  onBlur: (value?: string) => void
}

export const InputTextField: FC<Props> = ({
  isError,
  id,
  label,
  validationError,
  value,
  onChange,
  onBlur,
  type = 'text',
}: Props): JSX.Element => {
  return (
    <TextField
      required
      error={isError}
      className="text-field"
      label={label}
      inputProps={{ 'data-testid': id }}
      helperText={validationError}
      value={value}
      color="success"
      type={type}
      onChange={onChange}
      onBlur={() => onBlur()}
    />
  )
}
