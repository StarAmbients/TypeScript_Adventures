function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result...: " + num);
}

printResult(add(5, 12));

// let someValue: undefined; --> never use undefined as type of a function

// let combinedValues: Function;
let combinedValues: (a: number, b: number) => number;

combinedValues = add;
console.log(combinedValues(8, 70));
