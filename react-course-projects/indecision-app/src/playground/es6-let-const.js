// babel src/playground/es6-let-const.js --out-file=public/scripts/app.js --presets="env,react" --watch

var nameVar = "Tyler";
var nameVar = "Barry";
console.log("nameVar", nameVar);

let nameLet = "Limmy";
// let nameLet = "Timmy";
nameLet = "Timmy";
console.log('nameLet', nameLet);

const nameConst = 'Sonny';
// nameconst = "Gunther";
console.log ('nameConst', nameConst);

// function getPetName() {
//     var petName = "Leo";
//     return petName;
// }

// const petName = getPetName();
// console.log(petName);

var fullName = "Bob Ross";

if (fullName) {
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);

//var is function scoped, let/const are block scoped