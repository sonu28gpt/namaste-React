import React from "react";
import  ReactDOM  from "react-dom";

const heading=React.createElement('h1',{id:'heading'},'react hai apun');
console.log(heading);//object i.e. react element
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);


const parent=React.createElement('div',{id:"parent"},[
    React.createElement('div',{id:'child1'},[
        React.createElement('h1',{},"H1"),
        React.createElement('h2',{},'H2')
    ]),
    React.createElement('div',{id:'child1'},[
        React.createElement('h1',{},"H1"),
        React.createElement('h2',{},'H2')
    ])
]);

root.render(parent);