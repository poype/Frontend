import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
  How React Works:

  React takes the component tree and build a JavaScript data structure called the virtual DOM.
  When the state or the data of a component changes, React updates the corresponding nodes in the virtual DOM.
  Then it compares the current version of virtual DOM with the previous version to identity the nodes that should be updated.
  It will update those nodes in the actual DOM.
  Technically, updating the actual DOM is not done by React itself, it's done by library called React DOM.

  React is platform agnostic.
  here we use ReactDOM to render components into web page, 
  we can also render components tree in a mobile app using different libaray called React Native. 
  We can use react to build web, mobile app and destop devices.
 */
