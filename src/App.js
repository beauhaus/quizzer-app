import React, { Component } from "react";
import { render } from "react-dom";

import defaultQuiz from "./data/icons.json";
// import mathDB from "./data/math.json";

import AppContainer from "./AppContainer";

// Auto-load a quiz example into LocalStorage
// We then retrieve it & place it on state

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = { init: "" };
    this.initLSInsert = this.initLSInsert.bind(this);
    this.state = {
      init: ""
    };
  }
  initLSInsert() {
    //Feed into LS
    let stringedIconsDB = JSON.stringify(defaultQuiz);
    localStorage.setItem("iconsDB", stringedIconsDB);
    //Load From LS onto variable
    let gottenIconsDB = localStorage.getItem("iconsDB");
    let iconsDBParsed = JSON.parse(gottenIconsDB);
    //Place onto state
    this.setState(() => {
      return { initDB: iconsDBParsed };
    });
  }

  componentDidMount() {
    this.initLSInsert(); // auto-load into LS
  }
  render() {
    return (
      <AppContainer
        initDB={this.initLSInsert}
        lsStatus={this.state.initDB}
        loadDefaultQuiz={this.loadDefQ}
      />
    );
  }
}
render(<Root />, document.getElementById("root"));
