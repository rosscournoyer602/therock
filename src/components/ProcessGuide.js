import React from 'react'
import { withRouter } from 'react-router-dom';
import UpdaterDeleter from '../containers/UpdaterDeleter'

function ProcessGuide(props) {
    const completionDescription = props.completionDescription.split(/[1-9]\./).map((step, index) => {
      return <li className="processList" key={index}>{step}</li>
    })
    completionDescription.shift()
    const measures = props.measures[0].split(/[1-9]\./).map((step, index) => {
      return <li className="processList" key={index}>{step}</li>
    })
    measures.shift()
    console.log(completionDescription)
    return (
      <div>
        <div className="processField">
          <h1 className="processFieldTitle">{props.title}</h1>
        </div>
        <br />
        <div className="processField">
          <h2 className="processFieldHeader">Purpose</h2>
          <p className="processFieldText">{props.purpose}</p>
        </div>
        <br />
        <div className="processField">
          <h2 className="processFieldHeader">Responsible Individuals</h2>
          <p className="processFieldText">{props.responsibleIndividuals}</p>
        </div>
        <br />
        <div className="processField">
          <h2 className="processFieldHeader">Completion Instructions</h2>
          <ol className="processFieldText">{completionDescription}</ol>
        </div>
        <br />
        <div className="processField">
          <h2 className="processFieldHeader">Measures of Success</h2>
          <p className="processFieldText">{measures}</p>
        </div>
        <br />
        <div className="processField">
          <h2 className="processFieldHeader">Relevant Documents</h2>
          <p className="processFieldText">{props.relevantDocuments}</p>
        </div>
        <UpdaterDeleter />
      </div>
    )
  }

export default withRouter(ProcessGuide)