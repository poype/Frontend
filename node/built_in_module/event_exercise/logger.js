const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    console.log(message);
    this.emit("LOG_MESSAGE", message);
  }
}

module.exports.logger = new Logger();
