import React from "react";
import Styled from "styled-components";

const StyledQA = Styled.section`
  grid-row: 1/4;
  grid-column: 3;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 30vh 10vh 10vh;
  grid-template-columns: 10vw 50vw 10vw;

h2.question-prompt {
  color: rgba(98, 77, 77, 0.5);
  font-size: 4rem;
  font-weight: 200;
  grid-row: 1;
  grid-column: 2;
  text-align: center;
  animation: fadein 2s;
}
  @keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }
`;

const QCompleteMsg = props => {
  // const { options, answer } = props.payload;
  // console.log(props.qLength);
  return (
    <StyledQA>
      <h2 className="question-prompt">TEST</h2>
      <div className="mulit-choice-container">
        <h1>Nice!</h1>
      </div>
    </StyledQA>
  );
};

export default QCompleteMsg;
