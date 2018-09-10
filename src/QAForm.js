import React from "react";
import Styled from "styled-components";

const StyledQA = Styled.section`
    /*
    display: grid;
    grid-template-columns: 16vw 4vw 60vw 4vw 16vw;
    grid-template-rows: 22vh 8vh 20vh 10vh;
 */
 height: 100%;
 width: 100%;
 background: pink;
h2.question-prompt {
    display: none;
    color: rgba(98, 77, 77, 0.5);
    font-size: 3.5rem;
    font-weight: 200;
    grid-row: 1;
    grid-column: 3;
    text-align: center;
    border: 1px solid green;
}
  
.question-prompt-container form {
  background: fuchsia;
  grid-row: 2;
  grid-column: 3;
}
.question-prompt-container form input {
  box-shadow: inset 2px 2px 2px 2px rgba(0, 0, 0, 0.5);
  text-align: center;
  border: 1px solid #85f8d6;
  color: #66bea4;
  padding: 1%;
  letter-spacing: 0.1rem;
  font-size: 3rem;
  font-weight: 200;
  width: 100%;
  height: 100%;
}

form input textarea {
  color: red;
}

button.question-input-commit {
  font-size: 3.5rem;
  font-weight: 300;
  background: #90b9ad;
  grid-row: 2;
  grid-column: 4;
  text-align: center;
  padding: 2%;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.5);
}

.question-input-commit:hover {
  background: #4fbb9b;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5));
}
`;

const QAForm = props => {
  console.log("P> QAForm: ", props.payload);
  return (
    <StyledQA>
      <h2 className="question-prompt">Fear, Doubt & uncertainty?</h2>
      <form action="submit">
        <input type="text" name="question-input-box" placeholder="answer" />
      </form>
      <button className="question-input-commit">√</button>
    </StyledQA>
  );
};

export default QAForm;
