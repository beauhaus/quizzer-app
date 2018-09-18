import React, { Component } from "react";
import Styled from "styled-components";
import MultiChoiceContent from "./MultiChoiceContent";

import { QRecordKeeper } from "../ArchiverUtil";

//Contains wrapper for quizzes and quiz NAVIGATION

const StyledQuizDisplay = Styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(45deg, #ECEAEA 0%, #DAD4D4 100%);
  font-family: 'Montserrat', Tahoma, Geneva, Verdana, sans-serif;
  .quiz-display-container {
    padding: 0%;
    height: 100vh;
    display: grid;
    grid-template-columns: 5vw 15vw 60vw 15vw 5vw;
    grid-template-rows: 10vh 10vh 60vh;
    text-align: center;
  }
  
  h2.quiz-topic-title {
    color: #e9e9e9;
    font-style: italic;
    font-size: 4.5rem;
    height: 5vh;
    font-weight: 200;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
    grid-column: 3;
    grid-row: 1;
    height: 100%;
  }
 
  .qPrompt-number {
    font-weight: 200;
    font-size: 2rem;
    grid-column: 2;
    grid-row: 2;
    color: #aa9494;
    height: 100%;
  }

  .qPrompt-container {
    grid-column: 2/-2;
    grid-row: 3;
    color: #fff;
    display: grid;
    grid-template-columns: 5vw 5vw 70vw 5vw 5vw;
    grid-template-rows: 15vh 10vh 25vh 10vh;
    font-family: "Montserrat", sans-serif;
    & button.home {
      background: #607570;
      color: #fff;
      grid-column: 3;
      grid-row: 4;
      width: 12vw;
      display: flex;
      justify-content: space-around;
      font-size: 3.5vw;
      border-radius: 0.7rem;
      box-shadow: 2px 2px 10px 0px rgba(0,0,0,0.2);
      border: 1px solid maroon;
      font-weight: 100;
      margin: 0 auto;
      &:hover {
        background: #61c0c3;
        filter: opacity(.7);
        -webkit-filter: opacity(.7);
        text-shadow: -1px -1px 0px #000;  
      }
    }
  }
`;

class QuizDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizLen: 0,
      questCounter: 0
    };
    this.answerClickHandler = this.answerClickHandler.bind(this);
  }

  componentDidMount() {
    let len = this.props.quizArray.length;
    let quizName = this.props.quizName;
    this.setState({
      quizLen: len,
      quizName: quizName,
      gradedArr: []
    });
  }

  //sends accumulated user answers (gradedArr) to QRecordKeeper
  componentWillUnmount() {
    // console.log("QUIZDisplay unmounted and reset");
    const { quizName, gradedArr } = this.state;
    QRecordKeeper(quizName, gradedArr);
  }

  counterReset() {
    this.setState({ questCounter: 0 });
  }

  incrementer() {
    // conditions at completion of quiz...
    const { quizLen, questCounter } = this.state;
    if (questCounter + 1 === quizLen) {
      this.counterReset();
      this.props.quizModalClose();
    }
    this.setState(prevState => {
      return { questCounter: prevState.questCounter + 1 };
    });
  }

  answerClickHandler(qPrompt, guess, ans) {
    const answerBoolean = guess === ans;
    const guessObj = { qPrompt: qPrompt, grade: answerBoolean };
    this.setState(prevState => {
      return {
        gradedArr: prevState.gradedArr.concat(guessObj)
      };
    });
    this.incrementer();
  }

  render() {
    const { quizLen, questCounter, quizName } = this.state;
    const { quizArray } = this.props;
    return (
      <StyledQuizDisplay>
        <div className="quiz-display-container">
          <h2 className="quiz-topic-title">{quizName}</h2>
          <h3 className="qPrompt-number">
            Question {questCounter}/{quizLen}
          </h3>
          {/*
            {console.log("gradedArr ", this.state.gradedArr)}
          */}
          <div className="qPrompt-container">
            {quizLen != questCounter && (
              <MultiChoiceContent
                quizArray={quizArray[questCounter]}
                answerClickHandler={this.answerClickHandler}
              />
            )}
            <button
              className="home modal__btn--done"
              onClick={this.props.quizModalClose}
            >
              home
            </button>
          </div>
        </div>
      </StyledQuizDisplay>
    );
  }
}

export default QuizDisplay;

/*

  // resultsRecord(qName, qPrompt, boolGrade) {
  //   console.log("results Record run");
  //   let obj = { qPrompt: qPrompt, grade: boolGrade };
  //   this.setState(prevState => {
  //     return {
  //       currentQName: qName,
  //       gradedArr: prevState.gradedArr.concat(obj)
  //     };
  //   }, QRecordKeeper(this.state.currentQName, this.state.gradedArr));
  // }
*/
