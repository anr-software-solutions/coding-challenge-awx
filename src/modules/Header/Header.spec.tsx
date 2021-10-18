import React from 'react'
import { render, screen } from '@testing-library/react'
import { Header } from './Header'

describe('Header', () => {
  it('should load header container', () => {
    render(<Header />)
    expect(screen.getByTestId('header-container')).toBeInTheDocument()
  })

  it('should load header logo', () => {
    render(<Header />)
    expect(screen.getByTestId('header-logo')).toBeInTheDocument()
  })
})
