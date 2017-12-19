import React from 'react'
import { withRouter } from 'react-router-dom';

function Walkthrough(props) {
    return (
      <div>
        <div className="processField">
          <h2 className="processFieldHeader">{props.title}</h2>
        </div>
        <div className="processField">
          <p className="processFieldHeader">Video</p>
        </div>
      </div>
    )
  }

export default withRouter(Walkthrough)