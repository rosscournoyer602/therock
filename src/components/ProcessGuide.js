import React from 'react'
import { withRouter } from 'react-router-dom';
import UpdaterDeleter from '../containers/UpdaterDeleter'
import style from './style.css'

function ProcessGuide(props) {
    return (
      <div>
        <div className="processField">
          <h1 className="processFieldTitle">{props.title}</h1>
        </div>
        <div className="processField">
          <h2 className="processFieldHeader">Purpose</h2>
          <p className="processFieldText">{props.purpose}</p>
        </div>
        <div className="processField">
          <h2 className="processFieldHeader">Responsible Individuals</h2>
          <p className="processFieldText">{props.responsibleIndividuals}</p>
        </div>
        <div className="processField">
          <h2 className="processFieldHeader">Completion Instructions</h2>
          <p className="processFieldText">{props.completionDescription}</p>
        </div>
        <div className="processField">
          <h2 className="processFieldHeader">Measures of Success</h2>
          <p className="processFieldText">{props.measures}</p>
        </div>
        <div className="processField">
          <h2 className="processFieldHeader">Relevant Documents</h2>
          <p className="processFieldText">{props.relevantDocuments}</p>
        </div>
        <UpdaterDeleter />
      </div>
    )
  }

export default withRouter(ProcessGuide)