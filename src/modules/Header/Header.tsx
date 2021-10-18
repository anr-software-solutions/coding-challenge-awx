import React, { FC } from 'react'
import './Header.css'
import Logo from '../../assets/header-logo.png'

export const Header: FC = () => {
  return (
    <div data-testid="header-container" className="header">
      <img
        data-testid="header-logo"
        src={Logo}
        className="header-logo"
        alt=""
      />
    </div>
  )
}
