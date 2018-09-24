import React from "react";
import Styled from "styled-components";
import QuizItemFormatted from "./QuizItemFormatted";

const StyledList = Styled.ol`
  border: 1px solid green;
  width: 5vw;
  height 2vvh;
`;

const GradedList = props => {
  return (
    <StyledList className="graded-list">
      {typeof props.gradedList !== "undefined" &&
      props.gradedList.length > 0 ? (
        props.gradedList.map(item => {
          return <QuizItemFormatted key={item} gradedItem={item} />;
        })
      ) : (
        <li>You are Empty</li>
      )}
    </StyledList>
  );
};

export default GradedList;
