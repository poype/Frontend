const fs = require('fs');


fs.open('./abc.txt', 'w', (err, fd) => {
  if (err) {
    console.error("Open file fail: " + err)
  }

  fs.write(fd, "Hello World by nodeJs", (err) => {
    if (err) {
      console.error("Writing file error: " + err)
    }
    console.log("Writing file success")
  })
})

