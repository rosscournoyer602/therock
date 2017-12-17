import React from 'react'
import { Card } from 'antd'
import { Link } from 'react-router-dom'

function entryCard(props) {
    const cardRoute = `/entry/${props.type}/${props.title}`
    return (
      <div>
        <Link to={cardRoute}>
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