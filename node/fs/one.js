const fs = require('fs')

fs.readFile('./one.js', 'utf-8', (err, data) => {
  if (err) {
    console.error("read file fail", err);
    return;
  }
  console.log("file data: " + data);
})


console.log(__dirname)  // __dirname在node中代表当前路径