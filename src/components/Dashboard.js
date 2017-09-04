import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import TabList from './TabList'

export default (props) => {
    return (
        <div>
          <Grid>
            <Row>
              <Col md={3}>
                <TabList 
                  tabs={props.tabs}
                  chooseTab={props.chooseTab}/>
              </Col>
              <Col md={9}>
                <div>
                  <h1>{props.openTab}</h1>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
    )
}