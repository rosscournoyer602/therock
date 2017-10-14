import React from 'react'
import { Card } from 'antd'

function entryCard(props) {
    return (
        <div style={{ background: '#ECECEC', padding: '10px', width: '600px'}}>
          <Card title={props.title} bordered={true}>
            <p>{props.purpose}</p>
          </Card>
        </div>
    )
}

export default entryCard