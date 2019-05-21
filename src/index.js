import React from "react";
import ReactDOM from "react-dom";
import Person from "./Person/Person";

import "./styles.css";

class UserForm extends React.Component {
  state = {
    persons: [],
    buttonsData: ""
  };

  resetHandler = event => {
    this.refs.name.value = "";
    this.refs.age.value = "";
    this.setState({ buttonsData: "" });
  };

  validateHandler = event => {
    let buttonsData;
    if (
      this.refs.name.value === "" ||
      this.refs.name.value === null ||
      this.refs.age.value === "" ||
      this.refs.age.value === null
    ) {
      buttonsData = (
        <p className="btn btn-danger">Name and Age can not be empty!!!</p>
      );
      this.setState({ buttonsData: buttonsData });
    } else {
      this.saveHandler();
    }
  };

  saveHandler = event => {
    var size = this.state.persons.length;
    if (size > 0) {
      size = size + 1;
    } else {
      size = 0;
    }
    console.log(size);
    this.setState({
      persons: this.state.persons.concat({
        id: size,
        name: this.refs.name.value,
        age: this.refs.age.value
      })
    });
    console.log(this.state.persons);
    this.resetHandler();
  };

  deleteHandler = id => {
    console.log(id);
    let filteredArr = this.state.persons.filter(i => i.id !== id);
    this.setState({ persons: filteredArr });
  };

  render() {
    let list;
    var size = this.state.persons.length;
    console.log("listSize", size);
    if (size > 0) {
      list = (
        <ul>
          {this.state.persons.map((person, index) => (
            <Person
              key={index}
              id={person.id}
              name={person.name}
              age={person.age}
              delete={this.deleteHandler.bind(this, person.id)}
            />
          ))}
        </ul>
      );
    } else {
      list = <p className="gridValidation">No items in the Grid!!!</p>;
    }
    return (
      <div className="container">
        <div className="panel panel-primary">
          <div className="panel-heading">Add User</div>
          <div className="panel panel-body">
            <div className="form-group col-xs-5">
              <input
                ref="name"
                className="form-control"
                type="text"
                name="name"
                placeholder="Enter User Name"
              />{" "}
            </div>
            <div className="form-group col-xs-5">
              <input
                ref="age"
                className="form-control"
                type="text"
                name="age"
                placeholder="Enter User Age"
              />
            </div>
            <p className="fieldValidation">{this.state.buttonsData}</p>
            <div className="form-group col-xs-5">
              <button
                onClick={this.validateHandler}
                className="btn btn-primary"
                type="submit"
              >
                Add User
              </button>{" "}
              <button
                onClick={this.resetHandler}
                className="btn btn-success"
                type="submit"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        <div className="panel panel-primary">
          <div className="panel-heading">List Of Users</div>
          <div className="panel panel-body">{list}</div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<UserForm />, rootElement);
