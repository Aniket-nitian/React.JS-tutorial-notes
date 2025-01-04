const container = React.createElement("h2", { className: "title", id: "topic"}, "Hello Aniket from ReAcT");  //tag, attributes, content 

const Aniket = ReactDOM.createRoot(document.querySelector("#root"))//It create a element in object form 
Aniket.render(container); // renders/showing the h2 element to the root element in the HTML document



const container2 = React.createElement('section',
  {}, 
  [
    React.createElement('p', {key: 1}, "This is a paragraph inside a section")
  ],
  "HelloEveryBody Hows Going",
  [React.createElement(
    'form',
    {key: 3,},
    "Username"
  ),
React.createElement('input',{key: 4, htmlFor: 'username',id: 'username'})]
)

const root2 = ReactDOM.createRoot(document.querySelector("#root2"))
root2.render(container2)


const container3 = React.createElement(
  'div',
  {key: 1},
  [React.createElement(
    'img',
    {key: 2, src: "https://w7.pngwing.com/pngs/880/805/png-transparent-react-hd-logo.png", style: {width: "200px"}},

  )],
)

const root3 = ReactDOM.createRoot(document.querySelector("#root3"))
root3.render(container3);
