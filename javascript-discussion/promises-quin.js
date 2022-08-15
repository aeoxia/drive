//ASYNC CODE AND PROMISES

//define function fetchData, si setTimeOut gi-nest in the fetchData
//last response si fetchData

// const fetchData = callback => {
//     setTimeout(() =>{
//         callback('Done!');
//     }, 1500) //1.5 seconds
// }

//si fetchData gi nest sa setTimeOut
//mauna ug response si setTimeout
// setTimeout(() => {
//   console.log("Timer is done!");
//   fetchData((text) => {
//     console.log(text);
//   });
// }, 2000); //2 seconds

// console.log("Hello");
// console.log("Hi");

//PROMISES
// Example
let car = new Promise(function (resolve, reject) {
    fuel_fullTank = true;
    if (fuel_fullTank) resolve();
    else reject();
  });
  
  car
    .then(function () {
      console.log("The fuel tank is full");
    })
    .catch(function () {
      console.log("The fuel is not empty");
    });
  
  const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Done!");
      }, 1500); //1.5 seconds
    });
    return promise;
  };
  
  setTimeout(() => {
    console.log("Timer is done!"); // unang binasa niya is itong timer is done
    fetchData() // fetch data
      .then((text) => {
        console.log(text); // done!
        return fetchData();
      })
      .then((text2) => {
        // done!
        console.log(text2);
      });
  }, 5000); //2 seconds
  
  // callback functions are executed in the sequence they are called.
  
  // this is function 1: fetchData
  // this is function 2: fetchData2
  
  //fetchData()
  // fetchData2() // this is the output in the console