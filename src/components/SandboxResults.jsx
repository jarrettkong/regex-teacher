import React from "react";
import "./SandboxResults.scss";

const SandboxResults = props => {
  return (
    <section className="SandboxResults">
      <h2 className="SandboxResults-header">Matches</h2>
      <div className="SandboxResults-container">
        <ol className="SandboxResults-match-container">
          {props.matches.map((match, i) => {
            return (
              <li key={i} className="SandboxResults-match">
                {match}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default SandboxResults;
