import React from 'react'
import { render, screen } from '@testing-library/react'
import { MainContent } from './MainContent'
import { modules } from '../../translations/en-us.json'

describe('Footer', () => {
  it('should load footer description', () => {
    render(<MainContent />)
    expect(screen.getByText(modules.mainContent.title)).toBeInTheDocument()
  })

  it('should load footer description', () => {
    render(<MainContent />)
    expect(screen.getByText(modules.mainContent.title)).toBeInTheDocument()
  })
})
