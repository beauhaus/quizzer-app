import React from "react";
import Styled from "styled-components";

const StyledQA = Styled.section`
  opacity: 1;
`;

const QAForm = props => {
  // console.log("P> QAForm: ", props.payload);
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
