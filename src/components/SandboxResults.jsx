import React from 'react'
import './SandboxResults.scss'

const SandboxResults = (props) => {
  return (
    <section className="SandboxResults">
      <div className="SandboxResults-container">
        <h2 className="SandboxResults-header">Matches</h2>
        {props.matches.map((match, i) => {
          return <p key={i} className="SandboxResults-match">{i+1}. {match}</p>
        })}     
      </div>
      <div className="SandboxResults-container">
        <h2 className="SandboxResults-header">Groups</h2>
        <p>Coming Soon</p>
        {/* {props.groups.map((group, i) => {
          return <p className="SandboxResults-match">{i+1}. {group}</p>
        })} */}
      </div>
    </section>
  )
}

export default SandboxResults
