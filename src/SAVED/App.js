import React, { Component } from "react";
import { render } from "react-dom";

import Styled from "styled-components";
// import CurrentDBDisplay from "./CurrentDBDisplay";
// <CurrentDBDisplay db={this.state.db} />

import masterDB from "./masterDB.json";
import DataForm from "../DataForm";

const StyledHeader = Styled.header`
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #fff;
  & > a h1 {
    font-family: "Trebuchet MS", sans-serif;
      color: #f2af29;
      font-size: 20px;
      text-decoration: none;
      font-weight: 100;
      display: block;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      db: [],
      itemToPush: "",
      newDBCategory: ""
    };
  }

  placeInLocalStorage() {
    //input to LS
    let stringedMasterDB = JSON.stringify(masterDB);
    localStorage.setItem("masterDB", stringedMasterDB);
    let dbGotten = localStorage.getItem("masterDB");
    let db = JSON.parse(dbGotten);
    this.setState(() => {
      return { db };
    });
  }
  componentDidMount() {
    this.placeInLocalStorage(); // auto-load into LS
  }

  handleGetClick() {
    // console.log("get");
  }

  handleDelClick() {
    localStorage.clear();
  }
  render() {
    return (
      <div className="app-container">
        <StyledHeader>
          <button onClick={this.handleGetClick}>get</button>
          <button onClick={this.handleDelClick}>erase</button>
        </StyledHeader>
        <div className="display" />
        <DataForm />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

// <pre>{JSON.stringify(this.state.db, null, 4)}</pre>
