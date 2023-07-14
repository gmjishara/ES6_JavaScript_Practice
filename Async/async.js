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

async function createData(key) {
  try {
    const data = await getData(key);
    const proccessData = await processedData(data);
    const sentData = await sendData(proccessData);
    console.log(sentData);
  } catch (error) {
    console.log(error);
  }
}

createData(971231);
