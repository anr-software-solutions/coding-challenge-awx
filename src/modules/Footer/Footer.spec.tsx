import React from 'react'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { modules } from '../../translations/en-us.json'

describe('Footer', () => {
  it('should load footer description', () => {
    render(<Footer />)
    expect(screen.getByText(modules.footer.description)).toBeInTheDocument()
  })

  it('should load privacy policy', () => {
    render(<Footer />)
    expect(
      screen.getByText(modules.footer.privacyPolicyStatement)
    ).toBeInTheDocument()
  })
})
