import React from 'react'
import { Card } from 'antd'

function entryCard(props) {
    return (
        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Card title={props.title}>
            <p>{props.purpose}</p>
          </Card>
        </div>
    )
}

export default entryCard