import React from 'react'
import TabItem from './TabItem'

const TabList = (props) => {

    const tabItems = Object.values(props.tabs).map((tab) => {
        return <TabItem tab={tab} key={tab} chooseTab={props.chooseTab} />
    })

    return (
      <ul className="Col-md-3 list-group">
        { tabItems }
      </ul>
    )
}

export default TabList