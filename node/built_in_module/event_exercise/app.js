const { logger } = require("./logger");

logger.on("LOG_MESSAGE", function (eventArg) {
  console.log("Listener 111 called");
  console.log(eventArg);
});

logger.on("LOG_MESSAGE", function (eventArg) {
  console.log("Listener 222 called");
  console.log(eventArg);
});

logger.log("Hello");
