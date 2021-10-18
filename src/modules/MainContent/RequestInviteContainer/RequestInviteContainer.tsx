import React, { useCallback, useState } from 'react'
import { modules } from '../../../translations/en-us.json'
import { Button, Modal } from '@mui/material'
import { FormContainer } from './FormContainer/FormContainer'
import { Email } from '@mui/icons-material'
import { ModalContextProvider } from './ModalContainer/FormModalContext'
import { ModalContent } from './ModalContainer/ModalContent'
import { SuccessModalContent } from './SuccessModalContent/SuccessModalContent'
import './RequestInviteContainer.css'

export const RequestInviteContainer: React.FC = () => {
  const [openFormModal, setOpenFormModal] = useState(false)
  const handleOpenFormModal = () => setOpenFormModal(true)
  const handleCloseFormModal = () => setOpenFormModal(false)

  const [openSuccessModal, setOpenSuccessModal] = useState(false)
  const handleOpenSuccessModal = () => setOpenSuccessModal(true)
  const handleCloseSuccessModal = useCallback(
    () => setOpenSuccessModal(false),
    []
  )

  const onSuccessRequest = useCallback(() => {
    handleCloseFormModal()
    handleOpenSuccessModal()
  }, [])

  return (
    <>
      <Button
        variant="contained"
        color="success"
        size="large"
        className="request-button"
        endIcon={<Email />}
        onClick={handleOpenFormModal}
      >
        {modules.mainContent.buttonText}
      </Button>
      <ModalContextProvider
        successRequest={onSuccessRequest}
        closeSuccessModal={handleCloseSuccessModal}
      >
        <>
          <Modal open={openFormModal} onClose={handleCloseFormModal}>
            <div>
              <ModalContent title={modules.inputContainer.title}>
                <FormContainer />
              </ModalContent>
            </div>
          </Modal>
          <Modal open={openSuccessModal} onClose={handleCloseSuccessModal}>
            <div>
              <ModalContent title={modules.successModal.title}>
                <SuccessModalContent />
              </ModalContent>
            </div>
          </Modal>
        </>
      </ModalContextProvider>
    </>
  )
}
