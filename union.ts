/* 4 Type Guards */
/* 1. 'in' keyword
   2. 'typeof' keyword 
   3. 'instanceof' keyword
   4. type predicates with custom type guard */


/* Type Predicate
While you are probably familiar with "in", "typeof", and "instanceof",
you might be wondering what "type predicates" are.
Type predicates are a special return type that signals to the
Typescript compiler what type a particular value is. Type predicates
are always attached to a function that takes a single argument and
returns a boolean. Type predicates are expressed as argumentName is Type. */

interface Cat {
    numberOfLives: number;
}
interface Dog {
    isAGoodBoy: boolean;
}

function isCat(animal: Cat | Dog): animal is Cat {
    return typeof (animal as Cat).numberOfLives === 'number';
}
/* For sample function, isCat, is executed at run time just like
all other type guards.Since this function returns a boolean
and includes the type predicate animal is Cat, the Typescript compiler
will correctly cast the animal as Cat if isCat evaluates as true.
It will also cast animal as Dog if isCat evaluates as false. */

let cat = { kind: 'Persian', numberOfLives: 25 };
let dog = { kind: 'Martiz', isAGoodBoy: false };

function showPetInfo(animal: Cat | Dog): void {
    if (isCat(animal)) {
        console.log(`cat: ${(animal as Cat).numberOfLives}`);
    } else {
        console.log(`dog: ${(animal as Dog).isAGoodBoy}`);
    }
}

showPetInfo(cat);
showPetInfo(dog)




// Union Type: function reacts depending on x type (array of string OR string)
function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
        console.log("Hello, " + x.join(" and "));  		// 'x' is 'string[]'
    } else {
        console.log("Welcome lone traveler " + x);		// 'x' is 'string'
    }
}

