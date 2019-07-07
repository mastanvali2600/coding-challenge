import React from "react";
import "./App.css";
import UserList from "./components/userList";
function App() {
  return (
    <div className="App">
      <div class="container">
        <div>
          <img
            src="https://ci4.googleusercontent.com/proxy/-nnzTAK9oA6gLI9kGVeUlI7jioqzEh9WntLiftwWxdlgg711bgkUe8EDdklvVnMXitwujI0BKc5tJpFh5ko78tWnwAS6ctzmP3Qb7nK5c9QO0XPajGzUgRzTocLneUyxZZnfA7YncnHt-X7fp32Y7GI=s0-d-e1-ft#https://drive.google.com/a/chimaera.my/uc?id=1u8xAJeNJZdudkUMIfRUiVpb3-v7MTWH6&export=download"
            alt="Office Image"
            class="rounded"
            width="200px"
            height="100px"
          />
        </div>
        <div>
          <h1>User Accounts</h1>
        </div>
        <div>
          <button className="btn btn-primary ">
            <i class="fa fa-plus p-2" />
            Create New
          </button>
        </div>
        <div>
          <UserList />
        </div>
      </div>
    </div>
  );
}

export default App;
