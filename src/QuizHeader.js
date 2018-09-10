import React from "react";
import Styled from "styled-components";

const StyledQuizHeader = Styled.header`
    background: linear-gradient(45deg, #ECEAEA 0%, #ddd 100%);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-content: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding: 20px;
    width: 100%;
    height: 10vh;
     button {
      height: 4vh;
      width: auto;
      color: red;
    }
    box-shadow: 0px 5px 14px 0px rgba(0,0,0,0.5);
`;

const QuizHeader = props => {
  return (
    <StyledQuizHeader>
      <button onClick={props.getStored}>Stored Quizzes</button>
      <button onClick={props.reset}>Reset</button>
      <button onClick={props.delStored}>erase</button>
      {/*
        <button onClick={this.handleDefIconQClick}>load Default icon Quiz</button>
        <button onClick={this.handleDefMathQClick}>load Default math Quiz</button>
    */}
    </StyledQuizHeader>
  );
};

export default QuizHeader;
