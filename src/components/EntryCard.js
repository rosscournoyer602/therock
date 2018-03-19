import React from 'react'
import { Card } from 'antd'
import { Link } from 'react-router-dom'
import style from './style.css'

function entryCard(props) {
    const cardRoute = `/entry/${props.type}`
    console.log(props)
    return (
      <div>
        <Link to={cardRoute}>
          <Card className="menuText" title={`${props.title} (${props.team})`} 
                bordered={true}
                style={{ width: '100%', margin: 'auto'}}>
              <p>{props.description}</p>
          </Card>
        </Link>
      </div>
    )
}

export default entryCard