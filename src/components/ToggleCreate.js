import React from 'react'
import { Route, withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { Radio } from 'antd'
import CreateProcess from '../containers/CreateProcess'
import CreateWalkthrough from '../containers/CreateWalkthrough'
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

function toggleCreate(props) {

    return (
      <div>
        <div className="toggle">
          <RadioGroup size="large">
            <Link to="/add/process">
              <RadioButton value="a">Process Guide</RadioButton>
            </Link>
            <Link to="/add/walkthrough">
              <RadioButton value="b">Walkthrough Video</RadioButton>
            </Link>
          </RadioGroup>
        </div>
        <Route path="/add/process" component={CreateProcess} />
        <Route path="/add/walkthrough" component={CreateWalkthrough} />
      </div>
    )
}

export default withRouter(toggleCreate)