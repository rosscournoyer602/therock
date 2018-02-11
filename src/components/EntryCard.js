import React from 'react'
import { Card } from 'antd'
import { Link } from 'react-router-dom'
import style from './style.css'

function entryCard(props) {
    const cardRoute = `/entry/${props.type}`
    
    return (
      <div>
        <Link to={cardRoute}>
          <Card className="menuText" title={`${props.title} (${props.team} Team)`} 
                bordered={true}
                style={{ width: '100%', margin: 'auto'}}>
              <p>{props}</p>
          </Card>
        </Link>
      </div>
    )
}

export default entryCard