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
    animation: fadein 2s;
  }
  @keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }
}
`;

// "payload" is an item in the questions array (A SINGLE question)
// "options" is a nested array (i.e. multiple choices)

const MultiChoiceFormat = props => {
  const { answer, options, question } = props.payload;
  console.log("payload", props.payload);
  console.log("options", props.payload.options);

  return (
    <StyledQA>
      <h2 className="question-prompt">{question}</h2>
      <div className="mulit-choice-container">
        {true &&
          options.map((item, idx) => {
            return (
              <button
                key={idx}
                answer={answer}
                onClick={() => props.answerHandler(options[idx], answer)}
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
