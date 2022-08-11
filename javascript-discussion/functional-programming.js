//#region
// const addValue = (num1, num2) => num1 + num2

// function computeSalary(salary, addValue) {
//     const benefits = 10_000
//     return addValue(salary, benefits) - 30_000
// }

// takeHomeSalary = computeSalary(130_000, addValue)

// console.log(takeHomeSalary)
//#endregion

class Dog {
    constructor(breed, age) {
        this.breed = breed
        this.age = age
    }
}

class AdoptedDog {
    constructor(owner, name, breed, age) {
        this.owner = owner;
        this.breed = breed;
        this.name = name;
        this.age = age;
    }
}

const dogList = [
    new Dog(
        breed = "Samoyed",
        age = "1"
    ),
    new Dog(
        breed = "Pomeranian",
        age = "2"
    ),
    new Dog(
        breed = "Pomsky",
        age = "1"
    ),
]


// for(let i = 0; i < dogList.length; i++) {
//     console.log(dogList[i].breed)
// }

// dogList.forEach(dog => {
//     console.log(dog.breed) 
// });

const dogOwnedList = dogList.map( dog => {
        let name;
        switch (dog.breed) {
            case 'Samoyed': name = "Jiro"
            break;
            case 'Pomeranian': name = "Teddy"
                break;
            case 'Pomsky': name = "Coco"
                break;
            default: name = "Joey"
        }
        return new AdoptedDog(
            owner = "Kennu",
            name = name,
            breed = dog.breed,
            age = dog.age,
        )
    }
)


dogOwnedList.forEach(dog => {
    console.log(dog)
});


