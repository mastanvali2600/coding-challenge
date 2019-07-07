import React, { createContext, useState, useEffect } from "react";

export const PersonListContext = createContext();

export const PersonListProvider = props => {
  const [persons, setPerson] = useState([]);
  function getData() {
    const items = [];
    for (let i = 1; i <= 4; i++) {
      fetch("https://reqres.in/api/users?page=" + i)
        .then(results => results.json())
        .then(resultdata => {
          console.log(resultdata);
          items.concat(resultdata.data);
        });
    }
    setPerson(items);
  }
  useEffect(() => {
    console.log("first");
    console.log(persons);
    getData();
    console.log("second");
    console.log(persons);
  }, []);
  return (
    <PersonListContext.Provider value={"Hello Bab"}>
      {props.childeren}
    </PersonListContext.Provider>
  );
};
