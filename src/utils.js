export const objArrMaker = qName => {
  var arr = [];
  var counter;
  //   const gradedQName = `graded ${qName}`;
  return function(qPrompt, boolGrade) {
    counter = counter + 1;
    console.log("count: ", counter);
    let obj = { qPrompt: qPrompt, grade: boolGrade };
    arr.push(obj);
    console.log(arr);

    // localStorage.setItem(gradedQName, JSON.stringify(arr));
  };
};

// export default objArrMaker;
