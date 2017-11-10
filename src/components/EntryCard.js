import React from 'react'
import { Card } from 'antd'

function entryCard(props) {
    return (
      <Card title={props.title} bordered={true} style={{ width: '100%', margin: 'auto'}}>
        <p>{props.purpose}</p>
      </Card>
    )
}

export default entryCard