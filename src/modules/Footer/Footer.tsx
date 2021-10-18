import React, { FC } from 'react'
import './Footer.css'
import { modules } from '../../translations/en-us.json'

export const Footer: FC = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-upper-text">{modules.footer.description}</div>
      </div>
      <div className="footer-content">
        <div className="footer-lower-text">
          {modules.footer.privacyPolicyStatement}
        </div>
      </div>
    </div>
  )
}
