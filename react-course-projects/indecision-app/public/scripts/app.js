"use strict";

//arguments object - no longer bound with arrow functions

// const add = function (a, b) { es5
//     console.log(arguments);
//     return a + b;
// }

// const add = (a, b) => { es6
//     console.log(arguments);
//     return a + b;
// }

var add = function add(a, b) {
  return a + b;
};

console.log(add(2, 3));

var user = {
  name: "Bob",
  cities: ["New York", "Montreal", "Vermont"],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.cities.map(function (city) {
      return _this.name + " has lived in " + city;
    });
  }
};

console.log(user.printPlacesLived());

//chalelnge

var multiplier = {
  numbers: [2, 4, 6, 8, 10],
  multiplyBy: 10,
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (number) {
      return number * _this2.multiplyBy;
    });
  }
};

console.log(multiplier.multiply());
