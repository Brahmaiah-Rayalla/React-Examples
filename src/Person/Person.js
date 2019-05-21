import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Person = props => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">{props.name}</div>
        <div className="card-text">Age: {props.age}</div>
        <button className="btn btn-danger" onClick={props.delete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Person;
