import React, { Component } from "react";
import Styled from "styled-components";

const StyledQuizItem = Styled.li`
    font-family: 'Trebuchet MS', Verdana;
    p {
        font-size: 1.5rem;
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
      {qName}
      <br />
      <p className="quiz-date">
        {weekday}, {monthName} {date} {timeFormat}
      </p>
    </StyledQuizItem>
  );
};

export default QuizItem;

/*
// var gradedLSQuizzes = rawGradedLSQuizzes.map(item => {
    //   const itemArr = item.split("");
    //   const start = item.indexOf(":") + 1;
    //   const end = item.indexOf("|");
    //   const numStr = item.slice(start, end);
    //   const gradedLSquizzes = parseInt(numStr);
    //   return gradedLSquizzes;
    // });
    */
