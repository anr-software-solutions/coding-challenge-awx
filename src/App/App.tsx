import React, { FC } from 'react'
import './App.css'
import { Header } from '../modules/Header/Header'
import { Footer } from '../modules/Footer/Footer'
import { MainContent } from '../modules/MainContent/MainContent'

export const App: FC = () => {
  return (
    <div data-testid="app-container" className="container">
      <div data-testid="container-header" className="container-header">
        <Header />
      </div>
      <div data-testid="container-content" className="container-content">
        <MainContent />
      </div>
      <div data-testid="container-footer" className="container-footer">
        <Footer />
      </div>
    </div>
  )
}
