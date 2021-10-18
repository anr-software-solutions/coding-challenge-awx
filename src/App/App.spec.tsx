import React from 'react'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('should load app components', () => {
    render(<App />)
    expect(screen.getByTestId('app-container')).toBeInTheDocument()
    expect(screen.getByTestId('container-header')).toBeInTheDocument()
    expect(screen.getByTestId('container-content')).toBeInTheDocument()
    expect(screen.getByTestId('container-footer')).toBeInTheDocument()
  })
})
