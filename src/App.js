import React, { Component } from "react";
import { render } from "react-dom";

import AppContainer from "./AppContainer";

import defaultQuizDB from "./data/defaultQuiz.json";

/*Root's class methods are to primarily deal with
 *the default quiz loading & display
 */

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = { init: "" };
    this.defaultQuizLSInsert = this.defaultQuizLSInsert.bind(this);
  }
  // On Pageload, a default example loads into LocalStorage
  // This method,then, retrieves it & places it onto state.

  defaultQuizLSInsert() {
    //Feed into LS
    let stringedIconsDB = JSON.stringify(defaultQuizDB);
    let quizStrName = "Default Quiz";
    localStorage.setItem(quizStrName, stringedIconsDB);

    //Load From LS onto variable
    let retrievedDefQuiz = localStorage.getItem(quizStrName);
    let defQuizParsed = JSON.parse(retrievedDefQuiz);

    //Place onto state
    // this.setState(() => {
    //   return { initDB: defQuizParsed };
    // });
  }

  componentDidMount() {
    this.defaultQuizLSInsert();
  }

  render() {
    return (
      <AppContainer
        defaultQuizLSInsert={this.defaultQuizLSInsert}
        // lSContents={this.state.initDB}
      />
    );
  }
}

render(<Root />, document.getElementById("root"));
