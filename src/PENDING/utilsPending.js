export const objArrMaker = qName => {
  var arr = [];
  let counter = 0;
  return function(qqPrompt, grade) {
    counter = counter + 1;
    console.log("count: ", counter);
    const gradedQName = `graded ${qName}`;
    var obj = { qPrompt: qqPrompt, grade: grade };
    // arr[counter] = obj;

    // console.log("arr: ", arr);
    // localStorage.setItem(gradedQName, JSON.stringify(arr));
  };
};
export const gradeObjArray = objArrMaker("name");

// gradeObjArray();

// export function recordKeeper(qName, qPrompt, boolGrade) {

// }

// var retrieve = localStorage.getItem("test1");
// console.log(retrieve);

/*
function objArrMaker(qName) {
  var arr =[];
  return function(qPrompt, grade) {
    var obj = {qPrompt: qPrompt, grade: grade};
    arr.push(obj);
    console.log(arr)
    var stringedArr = JSON.stringify(arr)
    localStorage.setItem(qName, stringedArr);
  };
};

var gradeObjArray = objArrMaker("test1");

gradeObjArray("happy", "wrong");




   var retrieve= localStorage.getItem("test1");
console.log(retrieve);
*/

/* FOR TIME STAMPING */
// const tStamp = () => {
//   const now = new Date();
//   const nowFormatted = `${now.getMonth()}/${now.getDay()} ${now.getHours()}:${now.getMinutes()}`;
//   return nowFormatted;
// };
//   const stamp = tStamp();
//   const gradedQName = `graded${qName}@-${stamp}`;
