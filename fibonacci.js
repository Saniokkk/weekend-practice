// const fibonacci = (n) => {
//   let a = 0;
//   let b = 1;
//   const array = [0];
//   do {
//     let x = a + b;
//     b = a;
//     a = x;
//     array.push(x);
//   } while (array.length <= n);

//   return array;
// };

// console.log("fibonacci - fibonacci", fibonacci(5));

const fibonacciRec = (n) => {
  if (n <= 1) {
    return [0, 1];
  } else {
    let fibIn = fibonacciRec(n - 1);
    fibIn.push(fibIn[fibIn.length - 1] + fibIn[fibIn.length - 2]);
    //console.log("fibonacciRec - fibIn", fibIn);
    return fibIn;
  }
};
console.log("fibonacciRec - fibonacciRec", fibonacciRec(19));
