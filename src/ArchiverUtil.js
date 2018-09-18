export const timeStamper = () => {
  var d = new Date();
  const monthArr = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC"
  ];
  const dayArr = ["sun", "mon", "tue", "wed", "thur", "fri", "sat", "sun"];

  var monthName = `${monthArr[d.getMonth()].toLowerCase()}`;
  var weekday = dayArr[d.getDay()];
  var monthDay = d.getDate();
  var hr = d.getHours();
  var min = (d.getMinutes() < 10 ? "0" : "") + d.getMinutes();
  // Stringed Time Stamp
  const timeStamp = `${weekday}_${monthName}_${monthDay}_${hr}:${min}`;
  return timeStamp;
};

// export const questionChecker = (guess, ans) => {
// const answerCheck = guess === ans;
// console.log("questionChecker", answerCheck);
// const { quizArray } = this.props;
// const { quizName, questCounter, quizLen } = this.state;
// let qPrompt = quizArray[questCounter].qPrompt;
// return console.log(qPrompt, answerCheck);
// };

export const QRecordKeeper = (quizName, gradedArr) => {
  // console.log("record keeper RUN!");
  console.log("gradedArr is: ", gradedArr);
  console.log("quizName is: ", quizName);

  // const tStamp = timeStamper();
  // console.log(tStamp);
};

// export default objArrMaker;
