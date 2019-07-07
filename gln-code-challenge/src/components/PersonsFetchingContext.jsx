import React, { Component, createContext } from "react";

export const PersonsFetchingContext = createContext();

export class PersonsFetchingProvider extends Component {
  state = { persons: [] };
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
  render() {
    return (
      <PersonsFetchingContext.Provider persons={this.state.persons}>
        {this.props.childeren}
      </PersonsFetchingContext.Provider>
    );
  }
}
