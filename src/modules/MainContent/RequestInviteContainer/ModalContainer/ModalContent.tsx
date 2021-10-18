import React, { FC, ReactElement } from 'react'
import { Box } from '@mui/material'
import './ModalContent.css'

interface ModalContentProps {
  title: string
  children: ReactElement
}

export const ModalContent: FC<ModalContentProps> = ({
  title,
  children,
}: ModalContentProps) => {
  return (
    <Box className="input-container">
      <div className="form-content">
        <div className="modal-title">{title}</div>
        {children}
      </div>
    </Box>
  )
}
