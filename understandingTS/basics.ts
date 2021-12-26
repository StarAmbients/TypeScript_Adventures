function add (n1: number, n2: number, showResult: boolean, phrase: string) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //    throw new Error('Incorrect input!');
    //}
    if (showResult) {
        console.log(phrase + (+n1 + +n2));
    } else {
        return n1 + n2;
    }
}

const number1 = 15;
const number2 = 4.8;
const printResult = true;
const resultPhrase = "Result.....: ";

add(number1, number2, printResult, resultPhrase);
// JavaScript uses "dynamic types" (resolved at runtime) while TypeScript uses "static types" (set during development))