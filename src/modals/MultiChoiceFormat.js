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
.mulit-choice-container {
  grid-row: 2;
  grid-column: 1/-1;
  display: flex;
  flex-direction: row;
  align-items: space-around;
  button {
    background: #90b9ad;
    border: 1px solid lightgreen;
    flex-grow: 1;
    flex-basis: 8rem;
    margin: 0 0.5rem;
    span {
      font-size: 4rem;
    }
    &:hover {
      background: #4fbb9b;
      filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5));
    }
  }
}
`;

const MultiChoiceFormat = props => {
  const { options, answer } = props.payload;
  return (
    <StyledQA>
      <h2 className="question-prompt">{props.payload.question}</h2>
      <div className="mulit-choice-container">
        {options.map((item, idx) => {
          return (
            <button
              id={item.id + idx}
              key={idx}
              answer={answer}
              onClick={() => props.ansCheck(options[idx], answer)}
            >
              <span role="img" aria-label="quiz-option">
                {item}
              </span>
            </button>
          );
        })}
      </div>
    </StyledQA>
  );
};

export default MultiChoiceFormat;
