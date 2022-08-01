// DONT FORGET TO UNCOMMENT AND COMMENT REGIONS WHEN STUDYING
//#region
// function run() {
//     var foo = "Foo";
//     let bar = "Bar";
  
//     console.log(foo, bar); // Foo Bar
  
//     {
//       var moo = "Mooo"
//       let baz = "Bazz";
//       console.log(bar, moo, baz); // Mooo Bazz
//     }
    
//     console.log(moo); // Mooo
//     console.log(baz); // ReferenceError
//   }
  
//   run();
//#endregion

// DONT FORGET TO UNCOMMENT AND COMMENT REGIONS WHEN STUDYING
//#region const vs let
// let numberCount = 34
// const id = 1  

// number = 63
// // id = 2
// console.log(numberCount, id)
//#endregion

// DONT FORGET TO UNCOMMENT AND COMMENT REGIONS WHEN STUDYING
//#region
let greeting = "Hello 'Irma'?";
console.log(greeting)
console.log(greeting[0]);
console.log(greeting[greeting.length-2]);
//#endregion


//#region Class or Objects
const student_object = {
    "name": "Dajie",
    "age": "1232312312",
}

console.log(student_object.name)
//#endregion


const scores = [1, 2, 3, 4];
scores.push(999)
console.log(scores)


let counter = 0
console.log(counter)
counter--
console.log(counter)
counter--
console.log(counter)
counter--
console.log(counter)
counter--
console.log(counter)

const number1 = 1
const number2 = 2
if(number1 < number2 || number2 > 0) {

}

switch(number1) {
    case 1: {
        console.log("YESSS")
        break
    }
    case 2: {
        console.log("oyesss")
        break
    }
    default: {
        console.log("OHNO")
        break
    }
}