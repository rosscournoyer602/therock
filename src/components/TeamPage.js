import React from 'react'

function TeamPage(props) {
    return (
        <div>
          <h1 className="processFieldTitle">{props.teamname}</h1>
          <br />
          <h2 className="processFieldHeader">{props.teamDescriptions}</h2>
        </div>
    )
}

export default TeamPage