//Write a function that loops through an array and returns the sum of the odd numbers

a = [1,2,3,4,5];
oddNum = [];

var sum = 0;
for (i=0; i<=a.length; i++) {
  if (i % 2 === 1 ) {
      sum = sum + i;
      // console.log("Inside Loop:" + oddNum);
  }
}

oddNum.push(sum);
// console.log("Final Answer:" + oddNum);
oddNum;
