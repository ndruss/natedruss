import React from "react";
export const Tile = props => (<div className="tile">
  <h2>{props.title}</h2>
  <h3>{props.description}</h3>
  <div>{props.content}</div>
</div>);
