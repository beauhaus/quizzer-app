import React from "react";
import Styled from "styled-components";

const StyledQA = Styled.section`
    grid-column: 3;
    grid-row: 3;
    /* 60x60 */
    font-family: "Montserrat", Verdana, sans-serif;
    font-weight: 100;
    display: grid;
    grid-template-rows: 50vh 10vh;
    grid-template-columns: 60vw;
    .quiz-content-container {
      grid-column: 1;
      grid-row: 1;
      /*60x50*/
      display: grid;
      grid-template-columns: 60vw;
      grid-template-rows: 80% 20%;
      background: rgba(178, 182, 218, 0.5);
      border: 1px solid #ccc;
      box-shadow: 5px 2px 20px 0px rgba(0, 0, 0, 0.5);
      p.qHint {
        color: #000;
        margin: 0 1vw;
        font-size: 1.5rem;
        font-weight: bold;
        text-align: left;
      }
      .qPrompt {
        margin: 0 auto;
        font-weight: 200;
        margin: 0 auto;
      }
      .qPrompt-lg {
        font-size: 4rem;
      }
      .qPrompt-sm {
        font-size: 2.4rem;
      }

    }
    .multi-choice-container {
      margin: 1vh -0.5vh;
      grid-column: 1;
      grid-row: 2;
      /*60x10*/
      display: flex;
      flex-direction: row;
      align-items: space-between;
      button {
        background: #aaa;
        border: 1px solid lightgreen;
        flex-grow: 1;     
        margin: 0 0.3vw;
        color: #ddd;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
        box-shadow: 2px 2px 10px 0px rgba(0,0,0,0.2);
        &.option-lg {
          font-size: 2.5vw;
        }
        &.option-sm {
          font-size: 1.8vw;
          
        }
        &:hover {
          background: #999;
          color: #fff;
          filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5));
        }
        animation: fadein 2s;
      }
    }
    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
`;

// "quizArray" is an item in the qPrompts array (A SINGLE quizPrompt)
// "options" is a nested array (i.e. multiple choices)

const MultiChoiceFormat = props => {
  const { answer, options, qPrompt, hint } = props.quizArray;
  return (
    <StyledQA className="styled-qa">
      <div className="quiz-content-container">
        {qPrompt.length > 24 ? (
          <p className="qPrompt qPrompt-sm">{qPrompt}</p>
        ) : (
          <h2 className="qPrompt qPrompt-lg">{qPrompt}</h2>
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
