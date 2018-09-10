import React, { Component } from "react";
import { render } from "react-dom";

import iconsDB from "./data/icons.json";
// import mathDB from "./data/math.json";

import AppContainer from "./AppContainer";

// Auto-load a quiz example into LocalStorage
// We then retrieve it & place it on state

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = { iconsDBParsed: [] };
    this.initLSInsert = this.initLSInsert.bind(this);
  }
  initLSInsert() {
    //Feed into LS
    let stringedIconsDB = JSON.stringify(iconsDB);
    localStorage.setItem("iconsDB", stringedIconsDB);
    //Load From LS onto variable
    let gottenIconsDB = localStorage.getItem("iconsDB");
    let iconsDBParsed = JSON.parse(gottenIconsDB);
    //Place onto state
    this.setState(() => {
      return { intialDB: iconsDBParsed };
    });
  }

  componentDidMount() {
    this.initLSInsert(); // auto-load into LS
  }
  render() {
    return <AppContainer reset={this.initLSInsert} />;
  }
}
render(<Root />, document.getElementById("root"));
