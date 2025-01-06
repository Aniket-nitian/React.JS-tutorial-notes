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

//using without JSX
const containerDIV = React.createElement('div',{key:0,id:"container"},
  [
    React.createElement('h1',{key:1},"I am heading 1"),
    React.createElement('h2',{key:2},"I am heading 2"),
  ]
);  //reactElement == object

//using JSX
const name = "Aniket"
const jsxHeading = (
  <div className="container">
    {name}
    <h1>I am heading from JSX</h1>  
  </div>
)
console.log(jsxHeading);
// jsx
//using babel => JSX --> babel(transpiler) --> reactElement

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(jsxHeading);


//components -- normal js function.
//function component and class based component(older one)

const Heading1 = () => {
  return <h4>NICE</h4>
}
const Heading = () => {
  return (
    <div>
      <h2>This is components</h2>
      <Heading1/>
      {/* or */}
      {Heading1()}
      <h2>Hello Aniket</h2>
    </div>
  );
}

const component = ReactDOM.createRoot(document.querySelector("#component"));
component.render(<Heading/>);
