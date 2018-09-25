import React from "react";
import Styled from "styled-components";
import QuizItemFormatted from "./QuizItemFormatted";

const StyledList = Styled.ol`
height: 100%;
grid-column: 3/4;
grid-row: 2;
border: 1px solid blue;
padding: 0;
`;

const GradedList = props => {
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
/*
graded quiz list => <ol> --40vw column--




*/
