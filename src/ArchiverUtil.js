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
  console.log("gradedArr: ", gradedArr);
  const tStamp = timeStamper();
  const recordName = `Graded:${tStamp}|${quizName}`;
  localStorage.setItem(recordName, JSON.stringify(gradedArr));
};
