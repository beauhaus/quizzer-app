import React from "react";
import Styled from "styled-components";
import QuizItemFormatted from "./QuizItemFormatted";

const StyledList = Styled.ol`
  height: 100%;
  grid-column: 2;
  grid-row: 1;
  border: 1px solid blue;
  padding: 0;
  grid-column: 2;
  border: 1px solid maroon;
  color: #a35;
  margin: 0;
  text-shadow: none;
`;

const GradedList = props => {
  // console.log("p> GradedList: ", props)
  return (
    <StyledList className="graded-quiz-list">
      {typeof props.gradedList !== "undefined" &&
      props.gradedList.length > 0 ? (
        props.gradedList.map(item => {
          return <QuizItemFormatted key={item} gradedItem={item} />;
        })
      ) : (
        <span>You are Empty</span>
      )}
    </StyledList>
  );
};

export default GradedList;
