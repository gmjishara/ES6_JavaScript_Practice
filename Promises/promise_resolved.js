// convert the callback hell into promise

function getData(key) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (key === 971231) {
          const data = "Row data";
          resolve(data);
        } else {
          reject("invalid key");
        }
      }, 1000);
    });
  }
  
  function processedData(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject("something went wrong");
        }
      }, 1000);
    });
  }
  
  function sendData(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject("something went wrong");
        }
      }, 1000);
    });
  }
  
  function gettingData(key){
    return getData(key)
    .then(processedData)
    .then(sendData)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
  }
  
  gettingData(971230);
  