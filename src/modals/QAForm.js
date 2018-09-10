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
}

form {
  grid-row: 2;
  grid-column: 2/4;
  display: grid;
  grid-template-columns: 50vw 10vw;
  grid-template-rows: auto;
}

.question-prompt-container form input {
  box-shadow: inset 2px 2px 2px 2px rgba(0, 0, 0, 0.5);
  text-align: center;
  border: 1px solid #85f8d6;
  color: #66bea4;
  letter-spacing: 0.1rem;
  font-size: 3rem;
  font-weight: 200;
  grid-column: 1;
  grid-row: 1;
  height: 100%;
}

form > button {
  grid-column: 2;
  grid-row: 1;
}
/*
.question-input-commit {
  font-size: 2.5rem;
  font-weight: 300;
  background: #90b9ad;
  text-align: center;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.5);
  height: 20px;
}
*/

.question-input-commit:hover {
  background: #4fbb9b;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5));
}
`;

const QAForm = props => {
  return (
    <StyledQA>
      <h2 className="question-prompt">{props.payload.question}</h2>
      <form action="submit">
        <input type="text" name="question-input-box" placeholder="answer" />
        <button className="question-input-commit">√</button>
      </form>
    </StyledQA>
  );
};

export default QAForm;
