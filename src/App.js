import React from "react";

import "./App.css";

import Greeting from "./components/greeting";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Greeting
          name={"Emon Hossain"}
          strNum={"Hello! My dear."}
          bool
          ary={[1, 2, 3, 4, 5]}
          aryOfObj={[
            { name: "Jack", age: 22 },
            { name: "Rome", age: 20 },
            { name: "Jullie", age: 18 }
          ]}
        >
          <h1>Children with h1 Element</h1>
        </Greeting>
      </div>
    );
  }
}

export default App;
