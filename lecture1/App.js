import React from "react";
import  ReactDOM  from "react-dom/client";

const heading=React.createElement('h1',{id:'heading'},'react hai apun');
// console.log(heading);//object i.e. react element
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

const Yuhi=(
    <h1>yuhi</h1>
);
const Jsxel=()=>{
    return (
    <div id="container">

       
    <h1 id="jsx" className="jsx" tabIndex="1" >
    jsx </h1>
    </div>
)};


const yuhi1=(
    <div id="yuhi1">

    {Yuhi}
    {<Jsxel/>}
    <Jsxel></Jsxel>
    {Jsxel()}
    <h1>yuhi1</h1>
    </div>
    
);

console.log(yuhi1);
root.render(yuhi1);

// console.log(<Jsxel/>);
// console.log(Jsxel());

// root.render(Jsxel());