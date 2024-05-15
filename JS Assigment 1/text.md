
Q1. function foo() { x = 1; function x() { } var x = '2'; return x; } alert( typeof foo() );

Ans: String

Q2. function foo() { return x; x = 1;

function x() { }

var x = '2';
} console.log( typeof foo() );

Ans: Function

Q3. var x = 1; function foo() { x = 10; return; function x() {} } foo(); console.log( x );

Ans: 1