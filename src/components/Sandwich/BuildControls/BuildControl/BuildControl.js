import React from 'react';
import classes from './BuildControl.css';

const BuildControl = (props) => (
  <div className={classes.BuildControl}>
    <div>{props.label}</div>
    <button onClick={props.added}>Add</button>
    <button onClick={props.removed} disabled={props.disabled}>Remove</button>
  </div>
);

export default BuildControl;
