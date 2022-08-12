//#region HIGHER ORDER FUNCTION
// const addValue = (num1, num2) => num1 + num2

// function computeSalary(salary, addValue) {
//     const benefits = 10_000
//     return addValue(salary, benefits) - 30_000
// }

// takeHomeSalary = computeSalary(130_000, addValue)

// console.log(takeHomeSalary)
//#endregion

//#region FOREACH AND MAP 
// class Dog {
//     constructor(breed, age) {
//         this.breed = breed
//         this.age = age
//     }
// }

// class AdoptedDog {
//     constructor(owner, name, breed, age) {
//         this.owner = owner;
//         this.breed = breed;
//         this.name = name;
//         this.age = age;
//     }
// }

// const dogList = [
//     new Dog(
//         breed = "Samoyed",
//         age = "1"
//     ),
//     new Dog(
//         breed = "Pomeranian",
//         age = "2"
//     ),
//     new Dog(
//         breed = "Pomsky",
//         age = "1"
//     ),
// ]


// for(let i = 0; i < dogList.length; i++) {
//     console.log(dogList[i].breed)
// }

// dogList.forEach(dog => {
//     console.log(dog.breed) 
// });

// const dogOwnedList = dogList.map( dog => {
//         let name;
//         switch (dog.breed) {
//             case 'Samoyed': name = "Jiro"
//             break;
//             case 'Pomeranian': name = "Teddy"
//                 break;
//             case 'Pomsky': name = "Coco"
//                 break;
//             default: name = "Joey"
//         }
//         return new AdoptedDog(
//             owner = "Kennu",
//             name = name,
//             breed = dog.breed,
//             age = dog.age,
//         )
//     }
// )


// dogOwnedList.forEach(dog => {
//     console.log(dog)
// });
//#endregion

//#region FILTER
// const ages = [32, 33, 16, 17]; 
// const checkAdult = (age) => { return age >= 18; }

// const result = ages.filter(checkAdult);

// console.log(result)

//#endregion


//#region REDUCE
// const numbers = ["+63", "927", "654", "4321"]

// const createNumber = (previous, current, index) => {
//     if(index == 0) return previous + current
//     return previous + " " + current
// }

// const number = numbers.reduce(createNumber, "")

// console.log(number)
//#endregion

//#region FIND
// class Dog {
//     constructor(breed, age) {
//         this.breed = breed
//         this.age = age
//     }
// }

// const dogs = [new Dog("Dachshund", 99), new Dog("Corgi", 23), new Dog("Golden Retriever", 6), new Dog("Labrador", 1)]

// const dog = dogs.find(dog => {
//     return dog.age > 10
// })

// console.log(dog)
//#endregion


//#region COPY OBJECT instead of changing value directly

//DONT DO THIS
const car = {
    brand: "Ferrari",
    year: 2022
}

car.brand = "Lambo" // this is not good!
console.log(car)

//DO THIS instead
const newCar = Object.assign({ owner: "Ravin" }, car, { brand: "Toyota" })
console.log(newCar)

//endregion