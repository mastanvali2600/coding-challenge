import React, { Component } from "react";
import UserDetails from "./userDetails";

class UserList extends Component {
  constructor() {
    super();
    this.state = {
      persons: []
    };
    this.editUser = this.editUser.bind(this);
  }
  editUser(index, name) {
    console.log(index, name);
    var persons = this.state.persons;
    var person = persons[index];
    person.first_name = name;
    person.last_name = "";
    this.setState({
      persons: persons
    });
    fetch("https://reqres.in/api/users/" + person.id, { method: "PUT" });
  }
  componentDidMount() {
    for (let i = 1; i <= 4; i++) {
      fetch("https://reqres.in/api/users?page=" + i)
        .then(results => results.json())
        .then(resultdata => {
          var data = this.state.persons.concat(resultdata.data);
          this.setState({ persons: data });
        });
    }
  }
  delete = id => {
    fetch("https://reqres.in/api/users/" + id, { method: "DELETE" }).then(
      () => {
        var index = 0;
        var personList = [...this.state.persons];
        personList.map(person => {
          if (id === person.id) {
            index = personList.indexOf(person);
          }
        });
        personList.splice(index, 1);
        this.setState({ persons: personList });
      }
    );
  };
  edit = (new_name, new_job, id) => {
    fetch("https://reqres.in/api/users/" + id, {
      method: "PUT",
      body: JSON.stringfy({
        name: new_name,
        job: new_job
      })
    });
  };
  render() {
    let dataElements = this.state.persons.map((person, index) => {
      return (
        <UserDetails
          id={person.id}
          index={index}
          firstName={person.first_name}
          lastName={person.last_name}
          image={person.avatar}
          deleteUser={this.delete}
          editUser={this.editUser}
        />
      );
    });
    return (
      <div class="container">
        <div class="row">{dataElements}</div>
      </div>
    );
  }
}
export default UserList;
