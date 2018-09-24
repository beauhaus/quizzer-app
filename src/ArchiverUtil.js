/*
 *  UPON UNMOUNT of <QuizDisplay/>...
 *  QRECORDKEEPER receives quizName and user quiz performance (gradedArr)
 *  It creates a timestamp appended to a new archive name as a key
 *  gradedArr is the value to that key
 *  This key/val is then 'set' to local storage
 *  (this file is only run upon completion of each quiz)
 */

export const timeStamper = () => {
  var unixEpoc = Date.parse(new Date());
  return unixEpoc;
};

export const QRecordKeeper = (quizName, gradedArr) => {
  console.log("recordKeeper run");
  const tStamp = timeStamper();
  const recordName = `Graded:${tStamp}|${quizName}`;
  localStorage.setItem(recordName, JSON.stringify(gradedArr));
};

/*******This will be used for retrieval***********
 *  var receivedUnixTimeStamp = 1537388120333; //4 testing
  var createdUnixDate = new Date().getTime();
  console.log("unix", createdUnixDate);
  var d = receivedUnixTimeStamp;
  var sec = d.getSeconds(),
    min = d.getMinutes(),
    hr = d.getHours(),
    day = d.getDay(),
    date = d.getDate(),
    yr = d.getFullYear();

  var timeForm = `${hr}:${min}:${sec}`;
  console.log(timeForm);
  return d;
 */

/********************OLD TIME STAMPER*********/
/*
export const timeStamper = () => {
  var d = new Date();
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

  var monthName = `${monthArr[d.getMonth()]}`;
  var weekday = dayArr[d.getDay()];
  var monthDay = d.getDate();
  var hr = d.getHours();
  var min = (d.getMinutes() < 10 ? "0" : "") + d.getMinutes();
  // Stringed Time Stamp
  const timeStamp = `${weekday}_${monthName}_${monthDay}_${hr}:${min}`;
  return timeStamp;
};
*/
