// function square (x) { //es5
//     return x * x;
// }

// console.log(square(5));

// // const squareArrow = (x) => { //es6
// //     return x * x;
// // }

// const squareArrow = (x) => x * x;

// console.log(squareArrow(8));

const fullName = "Bob Ross";
let firstName;

// if (fullName) {
//     firstName = fullName.split(' ')[0];
//     console.log(firstName);
// }
// console.log(firstName);

const getFirstName = (fullName) => {
    return firstName = fullName.split(' ')[0];
}

const getFirstName2 = (fullName) => firstName = fullName.split(' ')[0];

console.log(getFirstName("Steve Hold"));