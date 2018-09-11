import React, { Component } from "react";
import Styled from "styled-components";

import MultiChoiceFormat from "./MultiChoiceFormat";

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
    }

  nav {
    grid-column: 2/-2;
    grid-row: 4;
    text-align: center;
    display: flex;
    justify-content: space-between;
  }
  nav button {
    filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5));
  }
  nav button:hover {
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5));
  }
  button.arrow-right {
    width: 0;
    height: 0;
    border-right: 0px solid transparent;
    border-top: 4.5vh solid transparent;
    border-bottom: 4.5vh solid transparent;
    border-left: 5vw solid #ded9d9;
    background: transparent;
  }
  
  button.arrow-left {
    background: transparent;
    width: 0;
    height: 0;
    border-top: 4.5vh solid transparent;
    border-bottom: 4.5vh solid transparent;
    border-right: 5vw solid #ded9d9;
    border-left: 0px solid transparent;
  }
  
  button.home {
    width: 15vw;
    height: 80%;
    margin: 1% auto;
    background: #a6cfca;
    color: #fff;
    font-weight: 100;
    font-size: 3.5rem;
  }
`;

class QuizDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizLen: 0,
      optionsLen: 0,
      qCounter: 0,
      correctAns: 0,
      incorrectAns: 0
    };
    this.incrementer = this.incrementer.bind(this);
    this.decrementer = this.decrementer.bind(this);
    this.quizResults = this.quizResults.bind(this);
    this.answerHandler = this.answerHandler.bind(this);
    this.sendGradedRecord = this.sendGradedRecord.bind(this);
    this.resultsRecord = this.resultsRecord.bind(this);
  }
  componentDidMount() {
    let len = this.props.payload.length;
    let qName = this.props.quizName;
    this.setState({
      quizLen: len,
      quizName: qName,
      currentQName: qName,
      gradedArr: []
    });
  }

  sendGradedRecord(key, val) {
    // console.log(this.state.currentQName);
    // console.log(this.state.gradedArr);
    localStorage.setItem(key, JSON.stringify(val));
  }

  resultsRecord(qName, qPrompt, boolGrade) {
    let obj = { qPrompt: qPrompt, grade: boolGrade };
    this.setState(prevState => {
      return {
        currentQName: qName,
        gradedArr: prevState.gradedArr.concat(obj)
      };
    });
  }
  componentWillUnmount() {
    // resets incrementer upon unmount
    console.log("QUIZDisplay unmounted and reset");
    let key = `${this.state.currentQName}-test`;
    let val = this.state.gradedArr;
    this.sendGradedRecord(key, val);
    this.setState(() => ({
      qCounter: 0
    }));
  }
  incrementer() {
    // conditions at completion of quiz...
    if (this.state.qCounter + 1 === this.props.qLength) {
      alert("done");
      //   this.counterReset();
      //   this.props.quizModalClose();
      //   this.props.qCompleteCall();
    }
    this.setState(prevState => ({
      qCounter: prevState.qCounter + 1
    }));
  }
  decrementer() {
    this.setState(prevState => ({
      qCounter: prevState.qCounter - 1
    }));
  }

  quizResults(quizName, qPrompt, qAnswer) {
    this.resultsRecord(quizName, qPrompt, qAnswer);
  }

  storeQuizResults() {
    console.log("results Stored");
  }

  //Performs Checking of progress and creates user quiz results
  answerHandler(guess, answer) {
    const { payload } = this.props;
    const { quizName, qCounter, quizLen } = this.state;
    let qPrompt = payload[qCounter].qPrompt;
    if (qCounter + 1 === quizLen) {
      console.log("Done!");
    }

    const qAnswer = guess === answer;
    // console.log("qCounter: ", qCounter);
    this.quizResults(quizName, qPrompt, qAnswer);
  }

  render() {
    const { quizLen, qCounter, quizName } = this.state;
    const { payload } = this.props;

    return (
      <StyledQuizDisplay>
        <div className="quiz-display-container">
          <h2 className="quiz-topic-title">{quizName}</h2>
          <h3 className="qPrompt-number">
            Question {qCounter + 1}/{quizLen}
          </h3>
          <div className="qPrompt-container">
            {quizLen != qCounter && (
              <MultiChoiceFormat
                payload={payload[qCounter]}
                answerHandler={this.answerHandler}
              />
            )}

            <nav className="quiz-qPrompt-nav">
              <button className="btn arrow-left" onClick={this.decrementer} />
              <button
                className="home modal__btn--done"
                onClick={this.props.quizModalClose}
              >
                home
              </button>
              <button className="btn arrow-right" onClick={this.incrementer} />
            </nav>
          </div>
        </div>
      </StyledQuizDisplay>
    );
  }
}

export default QuizDisplay;
