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
      optionsLen: 0,
      qCounter: 0,
      correctAns: 0,
      incorrectAns: 0
    };
    this.quizResults = this.quizResults.bind(this);
    this.answerHandler = this.answerHandler.bind(this);
    this.sendGradedRecord = this.sendGradedRecord.bind(this);
    this.resultsRecord = this.resultsRecord.bind(this);
  }
  componentDidMount() {
    let len = this.props.quizArray.length;
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

  quizResults(quizName, qPrompt, qAnswer) {
    this.resultsRecord(quizName, qPrompt, qAnswer);
  }

  storeQuizResults() {
    console.log("results Stored");
  }

  //Performs Checking of progress and creates user quiz results
  answerHandler(guess, answer) {
    const { quizArray } = this.props;
    const { quizName, qCounter, quizLen } = this.state;
    let qPrompt = quizArray[qCounter].qPrompt;
    if (qCounter + 1 === quizLen) {
      console.log("Done!");
    }

    const qAnswer = guess === answer;
    // console.log("qCounter: ", qCounter);
    this.quizResults(quizName, qPrompt, qAnswer);
  }

  render() {
    const { quizLen, qCounter, quizName } = this.state;
    const { quizArray } = this.props;

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
                quizArray={quizArray[qCounter]}
                answerHandler={this.answerHandler}
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
