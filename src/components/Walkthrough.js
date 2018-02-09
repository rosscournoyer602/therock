import React from 'react'
import UpdaterDeleter from '../containers/UpdaterDeleter'
import { withRouter } from 'react-router-dom';
import style from './style.css'

function Walkthrough(props) {
  const src = props.video
    return (
      <div>
        <div className="processField">
          <h2 className="processFieldHeader">{props.title}</h2>
        </div>
        <div className="processField">
          <h2 className="processFieldHeader">Description</h2>
          <p className="processFieldText">{props.description}</p>
        </div>
        <div className="processField">
          <video src={src} width="100%" controls></video>
        </div>
        <UpdaterDeleter />
      </div>
    )
  }

export default withRouter(Walkthrough)