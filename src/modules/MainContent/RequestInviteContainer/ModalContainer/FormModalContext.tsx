import React, { useContext, useMemo, createContext, ReactElement } from 'react'

interface ModalContextProviderProps {
  closeSuccessModal: () => void
  successRequest: () => void
  children: ReactElement
}

interface ModalContextProps {
  closeSuccessModal: () => void
  successRequest: () => void
}

export const ModalContext = createContext<ModalContextProps>(
  {} as ModalContextProps
)

export const useModalContext: () => ModalContextProps = () => {
  return useContext(ModalContext)
}

export const ModalContextProvider: ({
  closeSuccessModal,
  successRequest,
  children,
}: ModalContextProviderProps) => JSX.Element = ({
  closeSuccessModal,
  successRequest,
  children,
}: ModalContextProviderProps) => {
  const context = useMemo(() => {
    return {
      closeSuccessModal,
      successRequest,
    }
  }, [closeSuccessModal, successRequest])

  return (
    <ModalContext.Provider value={context}>{children}</ModalContext.Provider>
  )
}
