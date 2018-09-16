import React, { Component } from "react";
import { render } from "react-dom";

import AppContainer from "./AppContainer";

import defaultQuizDB from "./data/defaultQuiz.json";

/*Root's class methods are to primarily handle
 *the default quiz loading & display
 */

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = { defQuizLoad: "" };
    this.defaultQuizLSInsert = this.defaultQuizLSInsert.bind(this);
  }
  // On Pageload,(via componentDidMount) a default example loads into LocalStorage
  // This method, then, retrieves the store & places it onto state.
  // It is also fired by user onClick of "reset" button.
  defaultQuizLSInsert() {
    // Feed into LS
    console.log("DEFAULTQUIZ INSERT!");
    let stringedIconsDB = JSON.stringify(defaultQuizDB);
    let quizStrName = "Default Quiz";
    localStorage.setItem(quizStrName, stringedIconsDB);

    //Load (Parsed quizDB) From LS onto variable
    let retrievedDefQuiz = localStorage.getItem(quizStrName);
    // (parsed)
    let defQuizLoad = JSON.parse(retrievedDefQuiz);

    //Place onto state
    this.setState(() => {
      return { defQuizLoad };
    });
  }

  componentDidMount() {
    this.defaultQuizLSInsert();
  }

  //defaultQInsert --to be used onMount and for user ( is also called through props) in QuizHeader (from handleLSResetClick).
  render() {
    return <AppContainer defaultQInsert={this.defaultQuizLSInsert} />;
  }
}

render(<Root />, document.getElementById("root"));
