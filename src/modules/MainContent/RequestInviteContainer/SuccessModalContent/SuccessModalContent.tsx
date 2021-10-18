import React, { FC } from 'react'
import { modules } from '../../../../translations/en-us.json'
import './SuccessModalContent.css'
import { Button } from '@mui/material'
import { Done } from '@mui/icons-material'
import { useModalContext } from '../ModalContainer/FormModalContext'

export const SuccessModalContent: FC = () => {
  const { closeSuccessModal } = useModalContext()

  return (
    <div className="form-container">
      <div className="success-description">
        {modules.successModal.description}
      </div>
      <Button
        variant="contained"
        color="success"
        size="large"
        data-testid="ok-button"
        className="ok-button"
        endIcon={<Done />}
        onClick={closeSuccessModal}
      >
        {modules.successModal.ok}
      </Button>
    </div>
  )
}
