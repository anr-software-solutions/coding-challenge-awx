import React, { FC } from 'react'
import './MainContent.css'
import { modules } from '../../translations/en-us.json'
import { RequestInviteContainer } from './RequestInviteContainer/RequestInviteContainer'

export const MainContent: FC = () => {
  return (
    <div className="content-container">
      <div className="title-text title-font">{modules.mainContent.title}</div>
      <div className="title-font title-text-rest">
        {modules.mainContent.titleRest}
      </div>
      <div className="description-text">{modules.mainContent.description}</div>
      <RequestInviteContainer />
    </div>
  )
}
