import React from "react";
import ReactDOM from "react-dom/client";

// const container = React.createElement("h2", { className: "title", id: "topic"}, "Hello Aniket from ReAcT");  //tag, attributes, children 

// const Aniket = ReactDOM.createRoot(document.querySelector("#root"))//It create a element in object form 
// Aniket.render(container); // renders/showing the h2 element to the root element in the HTML document



/* 
<div id="container">
  <h1>I am heading 1</h1>
  <h2>I am heading 2</h2>
</div> */


const containerDIV = React.createElement('div',{key:0,id:"container"},
  [
    React.createElement('h1',{key:1},"I am heading 1"),
    React.createElement('h2',{key:2},"I am heading 20"),
  ]
);  //reactElement == object

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(containerDIV);


//Bundlers are -
// webpack
// Vite
// parcel -->do import/export, create a local host, hot reload,dev server, minify the code, transpile the code, bundle the code, etc.

//npm(npm init then npm i -D parcel)
//depeandancy and devDepeandancy

//npm i react react-dom  --> now no need of react.development and react-dom.development of CDN link

//npx(parcel execute) parcel index.html

//tilde(~) is used for installing the latest version of the package, major change
// carate(^) is used for installing the latest version of the package which is compatible with the current version of the package, monor change in version
// . is used for installing the current version of the package