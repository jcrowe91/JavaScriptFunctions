// - In the past, we created a selection statement inside a loop that counted from 1 to 100 and only printed out the odd numbers.
// - Your task is to write a function printOdds() that takes one parameter, count, and uses a loop and selection statement to count to the number passed in, printing out the odd numbers.

// 1. Declare a function named `printOdds` using declaration notation (`function <name>(){...}`)
// 2. The function should take in one parameter named `count`
// 3. The function body should:
//    - contain a `for loop` that counts to the parameter passed in,
//    - an `if/else` statement that determines if the current value is odd,
//    - and then `console.log()` the odd value to the console
// BONUS: Now that you do not know exactly what number may be passed in as `count`, use an `if` statement to account for a negative `count` being passed in.

function printOdds(count) {
  for (let i = 0; i <= count; i++) {
    if (i % 2) {
      console.log(i);
    }
  }
}

printOdds(100);

// - Write a function that receives a name and age, and prints a greeting message to the console using the name.
// 1. Declare a function named `checkAge` using declaration notation (`function <name>(){...}`)
// 2. The function should take in two-parameter named `userName` & `age`
// 3. The function body should:
//    - declare and initialize an `aboveSixteen` local variable with string value: `"Congrats ${userName}, you can drive!"`,
//    - declare and initialize an `belowSixteen` local variable with string value: `"Sorry ${userName}, but you need to wait until you're 16."`,
//    - an `if/else` statement that determines if the `age` value is below 16,
//    - and then `console.log()` the correct message to the console.
// 4. BONUS: Remember that parameters are optional, and no `userName` or `age` value could be passed in. Correctly account for no parameter being passed in.

function legalAge (userName, age) {
    if (age >= 16) {
        console.log("Congrats " + userName + ", you can drive!");
    }else{
        console.log("Sorry, " + userName + ", but you'll need to wait until you're 16!");
    }
}

legalAge("Jake", 30);
legalAge("Audrey", 4);