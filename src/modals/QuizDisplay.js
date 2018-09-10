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

  .question-number {
    font-weight: 200;
    font-size: 2rem;
    grid-column: 2;
    grid-row: 2;
    color: #aa9494;
    height: 100%;
  }

  .question-prompt-container {
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
      quizLen: 0
    };
  }
  componentDidMount() {
    let len = this.props.payload.length;
    console.log("len@QD: ", len);
    this.setState({
      arrayLen: len
    });
    // console.log("P>Qdisplay: ", this.props.payload[0].options);
    // console.log("Array Length is: ", this.props.payload.length);
  }

  render() {
    const { arrayLen } = this.state;
    const { payload, qCounter } = this.props;
    return (
      <StyledQuizDisplay>
        <div className="quiz-display-container">
          <h2 className="quiz-topic-title">{this.props.quizName}</h2>
          <h3 className="question-number">
            Question {qCounter + 1}/{arrayLen}
          </h3>
          <div className="question-prompt-container">
            <MultiChoiceFormat
              payload={payload[qCounter]}
              ansCheck={this.props.ansCheck}
            />

            <nav className="quiz-question-nav">
              <button
                className="btn arrow-left"
                onClick={this.props.decrementer}
              />
              <button
                className="home modal__btn--done"
                onClick={this.props.quizModalClose}
              >
                home
              </button>
              <button
                className="btn arrow-right"
                onClick={this.props.incrementer}
              />
            </nav>
          </div>
        </div>
      </StyledQuizDisplay>
    );
  }
}

export default QuizDisplay;
