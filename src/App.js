import React, { Component } from "react";
import { render } from "react-dom";

import AppContainer from "./AppContainer";

import defaultQuizDB from "./data/defaultQuiz_Flags.json";
import cSVocabQuizDB from "./data/defaultQuiz_CSVocab.json";

/*Root's class methods are to primarily handle
 *the default quiz loading & display
 */

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = { defaultQuizLoad: "" };
    this.defaultQuizLSInsert = this.defaultQuizLSInsert.bind(this);
  }

  /*  On Pageload,(via componentDidMount) a default example loads into LocalStorage
  *  This method, then, retrieves the store & places it onto state.
  *  Method below is ALSO fired by user onClick of "Reset All Storage" button.
  */
  defaultQuizLSInsert() {
    // Feed into LS
    let stringedIconsDB = JSON.stringify(defaultQuizDB);
    let defaultQuizName = "Quiz-Default"; // Must begin with word "quiz"
    localStorage.setItem(defaultQuizName, stringedIconsDB);

    //Load (Parsed quizDB) From LS onto variable
    let retrievedDefQuiz = localStorage.getItem(defaultQuizName);
    // (parsed)
    let defaultQuizArray = JSON.parse(retrievedDefQuiz);

    /*********************VOCAB QUIZ INSERT AND LOAD********** */
    let stringedVocabDB = JSON.stringify(cSVocabQuizDB);
    let vocabQuizName = "Quiz-Vocab"; // Must begin with word "quiz"
    localStorage.setItem(vocabQuizName, stringedVocabDB);
    //Load (Parsed quizDB) From LS onto variable
    let retrievedVocabQuiz = localStorage.getItem(vocabQuizName);
    // (parsed)
    let vocabQuizArray = JSON.parse(retrievedVocabQuiz);

    this.setState(() => {
      return {
        defaultQuizArray,
        defaultQuizName,
        vocabQuizArray,
        vocabQuizName
      };
    });
  }

  componentDidMount() {
    this.defaultQuizLSInsert();
  }

  render() {
    return (
      <AppContainer
        defaultQInsert={this.defaultQuizLSInsert}
        defaultQuizArray={this.state.defaultQuizArray}
        defaultQuizName={this.state.defaultQuizName}
        vocabQuizArray={this.state.vocabQuizArray}
        vocabQuizName={this.state.vocabQuizName}
      />
    );
  }
}

render(<Root />, document.getElementById("root"));
