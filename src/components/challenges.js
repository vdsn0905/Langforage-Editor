export const challenges = [
  // Level 1..6: simplest prints and declarations
  {
    level: 1,
    title: "Print Hello",
    task: "Print 'Hello, World!'",
    hint: "Use dikhao with a string.",
    expectedOutput: `Hello, World!\n`,
  },
  {
    level: 2,
    title: "Print a Number",
    task: "Print the number 42.",
    hint: "Use dikhao with a number.",
    expectedOutput: `42\n`,
  },
  {
    level: 3,
    title: "Print a Value",
    task: "Declare a variable a with value 3 and print it.",
    hint: "Use banao and dikhao.",
    expectedOutput: `3\n`,
  },
  {
    level: 4,
    title: "Declare and Print Variable",
    task: "Declare a variable x with value 10 and print it.",
    hint: "Use banao and dikhao.",
    expectedOutput: `10\n`,
  },
  {
    level: 5,
    title: "Declare and Print String",
    task: "Declare a variable msg with value 'Hi' and print it.",
    hint: "Use banao and dikhao.",
    expectedOutput: `Hi\n`,
  },
  {
    level: 6,
    title: "String Concatenation",
    task: "Print 'Hello' and 'World' together.",
    hint: "Use + to join strings.",
    expectedOutput: `HelloWorld\n`,
  },

  // Level 7..12: basic arithmetic and concatenation
  {
    level: 7,
    title: "Simple Addition",
    task: "Print the sum of 5 and 7.",
    hint: "Use dikhao with addition.",
    expectedOutput: `12\n`,
  },
  {
    level: 8,
    title: "Simple Subtraction",
    task: "Print the result of 15 minus 4.",
    hint: "Use dikhao with subtraction.",
    expectedOutput: `11\n`,
  },
  {
    level: 9,
    title: "Simple Multiplication",
    task: "Print the product of 3 and 4.",
    hint: "Use dikhao with multiplication.",
    expectedOutput: `12\n`,
  },
  {
    level: 10,
    title: "Simple Division",
    task: "Print the result of 20 divided by 4.",
    hint: "Use dikhao with division.",
    expectedOutput: `5\n`,
  },
  {
    level: 11,
    title: "Compute Expression",
    task: "Print the result of (8 + 2) * 3.",
    hint: "Use arithmetic operators.",
    expectedOutput: `30\n`,
  },
  {
    level: 12,
    title: "Multiply and Add",
    task: "Print the result of (4 * 5) + 2.",
    hint: "Combine multiplication and addition in one expression.",
    expectedOutput: `22\n`,
  },

  // Level 13..17: conditionals and simple comparisons
  {
    level: 13,
    title: "Find Minimum of Two",
    task: "Declare a = 5, b = 3 and print the smaller value using a conditional.",
    hint: "Use yadi and nahito to compare and print.",
    expectedOutput: `3\n`,
  },
  {
    level: 14,
    title: "Max of Two",
    task: "Declare a = 7 and b = 12, then print the larger value using a conditional.",
    hint: "Use yadi to compare a and b.",
    expectedOutput: `12\n`,
  },
  {
    level: 15,
    title: "Conditional Check",
    task: "Declare x = 10 and if x greater than 5 print 'big' else print 'small'.",
    hint: "Use yadi and nahito.",
    expectedOutput: `big\n`,
  },
];

