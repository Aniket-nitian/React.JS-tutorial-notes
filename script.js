// const container = React.createElement("h2", { className: "title", id: "topic"}, "Hello Aniket from ReAcT");  //tag, attributes, children 

// const Aniket = ReactDOM.createRoot(document.querySelector("#root"))//It create a element in object form 
// Aniket.render(container); // renders/showing the h2 element to the root element in the HTML document



{/* 
  <div id="container">
  <h1>I am heading 1</h1>
  <h2>I am heading 2</h2>
</div> */
}

const containerDIV = React.createElement('div',{id:"container"},
  [
    React.createElement('h1',{},"I am heading 1"),
    React.createElement('h2',{},"I am heading 2"),
  ]
);  //reactElement == object

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(containerDIV);
