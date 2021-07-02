/* 4 Type Guards */
/* 1. 'in' keyword
   2. 'typeof' keyword
   3. 'instanceof' keyword
   4. type predicates with custom type guard */
function isCat(animal) {
    return typeof animal.numberOfLives === 'number';
}
/* For sample function, isCat, is executed at run time just like
all other type guards.Since this function returns a boolean
and includes the type predicate animal is Cat, the Typescript compiler
will correctly cast the animal as Cat if isCat evaluates as true.
It will also cast animal as Dog if isCat evaluates as false. */
var cat = { kind: 'Persian', numberOfLives: 25 };
var dog = { kind: 'Martiz', isAGoodBoy: false };
function showPetInfo(animal) {
    if (isCat(animal)) {
        console.log("cat: " + animal.numberOfLives);
    }
    else {
        console.log("dog: " + animal.isAGoodBoy);
    }
}
showPetInfo(cat);
showPetInfo(dog);
// Union Type: function reacts depending on x type (array of string OR string)
function welcomePeople(x) {
    if (Array.isArray(x)) {
        console.log("Hello, " + x.join(" and ")); // 'x' is 'string[]'
    }
    else {
        console.log("Welcome lone traveler " + x); // 'x' is 'string'
    }
}
