import React, { Component } from "react";
import Styled from "styled-components";

const StyledQuizItem = Styled.li`
&:hover {
  cursor: pointer;
  font-weight: 300;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
}

summary::-webkit-details-marker {
  display: none
}

.graded-quiz-title {
  color: #777;
  font-weight: bold;
  text-align: left;
  color: #a35;
  font-family: "Montserrat", sans-serif;
  font-weight: 100;
  font-size: 3rem;
  
}
summary {
  box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.1);
  margin-bottom: 0vh;
}
    summary:after {
      text-align: left;
      border-radius: 2px;
      content: "+"; 
      color: #fff; 
      float: left;
      font-size: 4rem;
      margin: 0rem 0.5rem 0 0; 
      line-height: 4rem;
      padding: 0%; 
      height: 18px;
      width: 18px;
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);  
    }
    details[open] summary:after {
      content: "–";
      line-height: 3.3rem;
    }
`;

const QuizItem = props => {
  const { gradedItem } = props;
  const dStampAndName = gradedItem.replace("Graded:", "");
  const dStampNameArr = dStampAndName.split("|");
  const qName = dStampNameArr[1];
  const qDateStamp = dStampNameArr[0];

  // Time Formatting
  const parsedDateStamp = parseInt(qDateStamp);
  const d = new Date(parsedDateStamp);
  var min = (d.getMinutes() < 10 ? "0" : "") + d.getMinutes();
  const hr = d.getHours();
  const day = d.getDay();
  const date = d.getDate();
  const mon = d.getMonth();

  const monthArr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  const dayArr = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
  var monthName = monthArr[mon];
  var weekday = dayArr[day];
  var timeFormat = `${hr}:${min}`;

  return (
    <StyledQuizItem className="styled-quiz-item">
      <details>
        <summary className="graded-quiz-title">{qName}</summary>
        <p className="quiz-date">
          {weekday}, {monthName} {date} {timeFormat}
        </p>
      </details>
    </StyledQuizItem>
  );
};

export default QuizItem;

/*

*/
