//arguments object - no longer bound with arrow functions

// const add = function (a, b) { es5
//     console.log(arguments);
//     return a + b;
// }

// const add = (a, b) => { es6
//     console.log(arguments);
//     return a + b;
// }

const add = (a, b) => a + b;

console.log(add(2, 3));

const user = {
  name: "Bob",
  cities: ["New York", "Montreal", "Vermont"],
  printPlacesLived() {
    return this.cities.map((city) => this.name +  " has lived in " + city);
  },
};

console.log(user.printPlacesLived());

//chalelnge

const multiplier = {
    numbers: [2, 4, 6, 8, 10],
    multiplyBy: 10,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log (multiplier.multiply());
