import React from 'react'

const TabItem = (props) => {
        return (
            <li 
              className="list-group-item"
              onClick={() => props.chooseTab(props.tab)}>
              { props.tab }
              </li>
        )
}

export default TabItem