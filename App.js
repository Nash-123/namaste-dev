/**
 * 
 * 
 *  <div id = "parent">
 *       <div id = "child">
 *            <h1>I'm h1 tag</h1>
 *        </div>
 * </div>
 * 
 * 
 * ReactElement(Object)  => HTML(Browser Understands)
 *  and renders it on the node.
 * 
 * 
 * 
 */

// const parent = React.createElement(
//     "div",
//      {id : "parent"},
//      React.createElement(
//         "div", 
//         {id : "child"},
//          [React.createElement("h1", {}, "I'm h1 tag"),
//           React.createElement("h2", {}, "I'm h2 tag")] 
//       )
// );


const parent = React.createElement(
    "div",
     {id : "parent"},[
    React.createElement(
        "div", 
        {id : "child"},
         [React.createElement("h1", {}, "I'm h1 tag"),
          React.createElement("h2", {}, "I'm h2 tag")]),
      
      React.createElement(
        "div", 
        {id : "child2"},
         [React.createElement("h1", {}, "I'm h1 tag"),
          React.createElement("h2", {}, "I'm h2 tag")] 
      )],

      
);

// JSx

const heading = React.createElement(
    "h1",
    {id : "heading", xyz : "abc"},
     "Hello World from react"
);

console.log(parent);

// h1 is not tag it is  an react object and every react element is an object 

    const root = ReactDOM.createRoot(document.getElementById("root"));


  // Renderheading inside root
   
    
    root.render(parent);  //render converts the h1/heading object to a h1 tag

