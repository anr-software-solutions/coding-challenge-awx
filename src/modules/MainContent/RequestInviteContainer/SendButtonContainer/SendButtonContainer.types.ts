export interface ApiError {
  data: {
    errorMessage: string
  }
}

export interface SendButtonContainerProps {
  fullName: string
  email: string
  confirmEmail: string
  isValid: boolean
}
