const EventEmitter = require("events");

const emitter = new EventEmitter();

// Register a event listener
emitter.on("messageLogged", function (eventArg) {
  console.log("Listener called");
  console.log(eventArg);
});

// Raise an event, the second arg is the data which need to be passed to listener.
emitter.emit("messageLogged", { id: 1, url: "xxx" });

// If you register a listener after calling the emit method, nothing will happen.
// When emit method is called, it will iterate all registered listeners and call them synchronously
