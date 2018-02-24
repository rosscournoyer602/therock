import React from 'react'
import { withRouter } from 'react-router-dom';
import UpdaterDeleter from '../containers/UpdaterDeleter'
import { Card, Col, Row } from 'antd'
import { Link } from 'react-router-dom'
import style from './style.css'

function ProcessGuide(props) {

  let completionDescription
  if (props.completionDescription.indexOf('1.') >= 0 || props.completionDescription.indexOf('01.') >= 0) {
    completionDescription = props.completionDescription.split(/[1-9]\./).map((step, index) => {
      return <li className="processList" key={index}>{step}</li>
    })
    completionDescription.shift()
  }
  else completionDescription = props.completionDescription

  let measures
  if (props.measures[0].indexOf('1.') >= 0 || props.measures.indexOf('01.') >= 0) {
    measures = props.measures[0].split(/[1-9]\./).map((step, index) => {
      return <li className="processList" key={index}>{step}</li>
    })
    measures.shift()
  }
  else measures = props.measures

  let responsibleIndividuals
  if (props.responsibleIndividuals.indexOf(',') >= 0) {
    measures = props.responsibleIndividuals.split(/,/).map((step, index) => {
      return <li className="processList" key={index}>{step}</li>
    })
    responsibleIndividuals.shift()
  }

  let files
  if (props.relevantDocuments) {
    files = props.relevantDocuments.map((file) => {
      const linkURL = `https://${file.fields.file.url.substring(2)}`
      return (
        <li className="fileCard" key={file.sys.id} span={8}>
          <a target="_blank" href={linkURL}>
            <Card className="menuText" title={file.fields.title}>
              <p>{file.fields.file.contentType}</p>
            </Card>
          </a>
        </li>
      )
    })
  }
  else {
    files = []
  }
  
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
        <ul className="processFieldText">{measures}</ul>
      </div>
      <br />
      <div className="processField">
        <h2 className="processFieldHeader">Relevant Documents</h2>
        <ul >{files}</ul>
      </div>
      <UpdaterDeleter />
    </div>
  )
}

export default withRouter(ProcessGuide)