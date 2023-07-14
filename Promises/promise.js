// creating the promise constructor

const promise = new Promise((resolve, reject) => {
  const randomNumber = Math.floor(Math.random() * 10);
  if (randomNumber > 5) {
    resolve("The number is: " + randomNumber);
  } else {
    reject("Error! The number is less than 5");
  }
});

promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// defining a function that returns a promise

function getNumber() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber > 5) {
      resolve("The number is: " + randomNumber);
    } else {
      reject("Error! The number is less than 5");
    }
  });
}

function printNumber(num) {
  console.log(num);
}

getNumber()
  .then(printNumber)
  .catch((error) => console.log(error));


