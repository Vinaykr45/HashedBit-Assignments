// Q1
const states = ["Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal"];

const statesWithoutVowels = states.filter(state => !['A', 'E', 'I', 'O', 'U'].includes(state[0].toUpperCase()));

console.log(statesWithoutVowels);

// Q2

let str = 'I love my India';
let reversedStr = str.split(' ').reverse().join(' ');

console.log(reversedStr);

// Q3

let string = 'INDIA';
string = string.split('');
string.splice(3, 0, 'O', 'N', 'E', 'S');
string = string.join('');

console.log(string);

// Q4 

let string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
let vowels = string.match(/[aeiou]/gi);
let consonants = string.match(/[bcdfghjklmnpqrstvwxyz]/gi);

console.log('Vowels:', vowels ? vowels.length : 0);
console.log('Consonants:', consonants ? consonants.length : 0);

// Q5

function correctFn(sentence, wrong, correct) {
    return sentence.replace(wrong, correct);
}

console.log(correctFn('I love to lern JavaScript', 'lern', 'learn'));

// Q6

let inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
let output = inputArr.filter(num => num > 5);

console.log(output);

// Q7

const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
];

const output = students.map(student => {
    const average = student.scores.reduce((total, score) => total + score, 0) / student.scores.length;
    return { name: student.name, average: average };
});

console.log(output);

// Q8

function repeatedSum(num) {
    while (num >= 10) {
        num = num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }
    return num;
}

console.log(repeatedSum(456)); 

// Q9

function countWords(paragraph) {
    return paragraph.split(/\s+/).length;
}

console.log(countWords('Lorem ipsum dolor sit amet, consectetur adipiscing elit'));

// Q10

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('Hello'));

// Q11

const students = [
    { student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } },
    { student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } },
    { student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } }
];

const output = students.map(student => {
    const scores = Object.values(student)[0];
    const sum = Object.values(scores).reduce((acc, score) => acc + score, 0);
    const average = sum / Object.keys(scores).length;
    return { average: average };
});

console.log(output);