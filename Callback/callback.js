function getData(key, callback) {
  setTimeout(() => {
    if (key === 971231) {
      const data = "Row data";
      callback(null, data);
    } else {
      callback("invalid key", null);
    }
  }, 1000);
}

function processedData(data, callback) {
  setTimeout(() => {
    if (data) {
      callback(null, data);
    } else {
      callback(error, null);
    }
  }, 1000);
}

function sendData(data, callback) {
  setTimeout(() => {
    if (data) {
      callback(null, data);
    } else {
      callback(error, null);
    }
  }, 1000);
}

function displaydata() {
  getData(971231, (error, result) => {
    if (error) {
      console.log("Something went wrong");
    } else {
      processedData(result, (error, result) => {
        if (error) {
          console.log("something went wrong");
        } else {
          sendData(result, (error, data) => {
            if (error) {
              console.log("something went wrong");
            } else {
              console.log("Final data: " + data);
            }
          });
        }
      });
    }
  });
}

displaydata();
