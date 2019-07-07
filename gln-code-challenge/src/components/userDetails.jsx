import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
    this.renderUser = this.renderUser.bind(this);
    this.renderEditing = this.renderEditing.bind(this);
    this.toggleUser = this.toggleUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }
  updateUser() {
    console.log(this.input.value);
    this.props.editUser(this.props.index, this.input.name);

    this.toggleUser();
  }
  toggleUser() {
    const { isEditing } = this.state;
    this.setState({
      isEditing: !isEditing
    });
  }
  renderEditing() {
    return (
      <div class="card card mb-3">
        <form class="card-left-content-wrapper row" onSubmit={this.updateUser}>
          <div class="col-8">
            <img
              src={this.props.image}
              alt={this.props.image}
              class="rounded-circle float-left"
              width="50px"
              height="50px"
            />
            <div class="card-left-content-text-wrapper">
              <TextField
                class="card-title"
                id="stadard-name"
                value={this.props.firstName + " " + this.props.lastName}
                ref={value => {
                  this.input = value;
                }}
              />
              <TextField
                class="card-text"
                id="stadard-disabled"
                value="12/04/1990"
              />
            </div>
          </div>
          <div class="col-4">
            <div class="justify-content-start p-1">
              <span>
                <button
                  type="submit"
                  class="btn btn-primary border-secondary rounded-circle border ml-auto"
                >
                  <i class="fa fa-check" />
                </button>
              </span>
            </div>
            <div class="justify-content-start p-1">
              <span>
                <button
                  onClick={() => this.toggleUser()}
                  class="btn btn-danger border-secondary rounded-circle border"
                >
                  <i class="fa fa-times" />
                </button>
              </span>
            </div>
          </div>
        </form>
      </div>
    );
  }
  renderUser() {
    return (
      <div class="card card mb-3">
        <div class="card-left-content-wrapper row">
          <div class="col-8">
            <img
              src={this.props.image}
              alt={this.props.image}
              class="rounded-circle float-left"
              width="50px"
              height="50px"
            />
            <div class="card-left-content-text-wrapper">
              <h5 class="card-title">
                {this.props.firstName} {this.props.lastName}
              </h5>
              <p class="card-text">
                <span>12/04/1991</span>
              </p>
            </div>
          </div>
          <div class="col-4">
            <div class="justify-content-start p-1">
              <span>
                <button
                  onClick={() => this.toggleUser()}
                  class="border-secondary rounded-circle border ml-auto"
                >
                  <i class="fa fa-pencil" />
                </button>
              </span>
            </div>
            <div class="justify-content-start p-1">
              <span>
                <button
                  onClick={() => this.props.deleteUser(this.props.id)}
                  class="border-secondary rounded-circle border"
                >
                  <i class="fa fa-trash" />
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    const { isEditing } = this.state;
    return (
      <div class="col-sm-6">
        {isEditing ? this.renderEditing() : this.renderUser()}
      </div>
    );
  }
}

export default UserDetails;
