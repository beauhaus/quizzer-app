import React from "react";
import Styled from "styled-components";

const StyledQA = Styled.section`
  grid-row: 1/4;
  grid-column: 3;
  font-family: "Montserrat", Verdana, sans-serif;
  font-weight: 100;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 30vh 10vh 9vh 1vh;
  grid-template-columns: 10vw 50vw 10vw;

  & div.quiz-content-container {
    color: rgba(98, 77, 77, 0.5);
    font-size: 4rem;
    font-weight: 200;
    grid-row: 1/3;
    grid-column: 2;
    text-align: center;
    display: grid;
    grid-template-rows: 30vh 10vh;
    grid-template-columns: 1fr;
    
    h2.qPrompt {
      grid-row: 1;
      grid-column: 1;
      height: auto;
      font-weight: 100;
    }
    p.qHint {
      color: #fff;
      font-size: 2rem;
      font-weight: 200;
      text-align: center;
      height: auto;
    }    
  }

.multi-choice-container {
  grid-row: 3;
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

// "quizArray" is an item in the qPrompts array (A SINGLE quizPrompt)
// "options" is a nested array (i.e. multiple choices)

const MultiChoiceFormat = props => {
  const { answer, options, qPrompt, hint } = props.quizArray;
  return (
    <StyledQA>
      <div className="quiz-content-container">
        <h2 className="qPrompt">{qPrompt}</h2>
        <p className="qHint">{hint}</p>
      </div>
      <div className="multi-choice-container">
        {true &&
          options.map((item, idx) => {
            return (
              <button
                key={options[idx]}
                answer={answer}
                onClick={() =>
                  props.answerClickHandler(qPrompt, options[idx], answer)
                }
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
/*
<details>
    <summary>What am I drinking?</summary>
    <p>(rhymes with "Toffee")<p/>
</details>
*/
