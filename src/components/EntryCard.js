import React from 'react'
import { Card } from 'antd'
import { Link } from 'react-router-dom'

function entryCard(props) {
    return (
      <div>
        <Link to="/entry">
          <Card title={`${props.title} (${props.team} Team)`} 
                bordered={true} 
                style={{ width: '100%', margin: 'auto'}}>
              <p>{props.purpose}</p>
          </Card>
        </Link>
      </div>
    )
}

export default entryCard