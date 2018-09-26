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
  grid-template-rows: 30vh 10vh 1vh 9vh;
  grid-template-columns: 5vw 60vw 5vw;

  & div.quiz-content-container {
    color: rgba(98, 77, 77, 0.5);
    font-size: 4rem;
    font-weight: 200;
    grid-row: 1/3;
    grid-column: 2;
    text-align: center;
    display: grid;
    grid-template-rows: 30vh 10vh;
    grid-template-columns: 50vw;
    
    h2 {
      grid-row: 1;
      grid-column: 1;
      margin: 0 auto;
      font-weight: 100;
    }
    .qPrompt-lg {
      font-size: 4rem;
      color: blue;
    }
    .qPrompt-sm {
      font-size: 2.4rem;
      color: red;
    }
    p.qHint {
      grid-row: 2;
      grid-column: 1;
      color: #000;
      font-size: 1.5rem;
      font-weight: 200;
      text-align: left;
      
    }    
  }

.multi-choice-container {
  grid-row: 4;
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
    &.option-lg {
      font-size: 2.5vw;
      color: red;      
    }
    &.option-sm {
      font-size: 2vw;
      color: fuchsia;
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
  console.log("string length: ", qPrompt.length);
  return (
    <StyledQA>
      <div className="quiz-content-container">
        {qPrompt.length > 24 ? (
          <p className="qPrompt-sm">{qPrompt}</p>
        ) : (
          <h2 className="qPrompt-lg">{qPrompt}</h2>
        )}

        <p className="qHint">{hint}</p>
      </div>
      <div className="multi-choice-container">
        {options.map((item, idx) => {
          return (
            <button
              key={options[idx]}
              answer={answer}
              className={options[idx].length < 12 ? "option-lg" : "option-sm"}
              onClick={() =>
                props.answerClickHandler(qPrompt, options[idx], answer)
              }
            >
              {item}
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
