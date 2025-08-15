import React from "react";
import ReactDOM from "react-dom/client";  // Correct import for React 18+

const heading = React.createElement("h1", {id: "heading"}, "Hello world from React!");
//1)element 2)attribute(id,class,....) 3)content 

// props -> Attributes + props 

console.log(heading);  // heading is a object(react element)

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

// we are passing react Element(heading)  to render function 
// root.render(heading);
// render takes and converts object that into an tags and put it on DOM


root.render(parent);