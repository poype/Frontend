const fs = require("fs");

fs.readdir("./", (err, files) => {
  if (err) {
    console.error('Error: ', err)
  } else {
    console.log('Result: ', files); // file list
  }
});
