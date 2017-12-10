import React from 'react'
import { withRouter } from 'react-router-dom';

function ProcessGuide(props) {
    return (
      <div>
        <div className="processField">
          <h2 className="processFieldHeader">{props.title}</h2>
        </div>
      </div>
    )
  }

export default withRouter(ProcessGuide)