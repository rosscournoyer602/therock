import React from 'react'
import UpdaterDeleter from '../containers/UpdaterDeleter'
import { withRouter } from 'react-router-dom';

function Walkthrough(props) {
  const src = props.video
    return (
      <div>
        <div className="processField">
          <h2 className="processFieldHeader">{props.title}</h2>
        </div>
        <div className="processField">
          <video src={src} width="650px" controls></video>
        </div>
        <UpdaterDeleter />
      </div>
    )
  }

export default withRouter(Walkthrough)