"use strict";

console.log("App.js is running");

//JSX - JavaScript XML
// var template = (
//     <div>
//         <h1>Indecision App</h1>
//         <p>This is some info</p>
//         <ol>
//             <li>Item One</li>
//             <li>Item Two</li>
//         </ol>
//     </div>
// );

var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Tyler Nelson"
    ),
    React.createElement(
        "p",
        null,
        "Age: 1"
    ),
    React.createElement(
        "p",
        null,
        "Location: Canada"
    )
);
var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);
