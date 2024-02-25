/*
<div id=parent>
    div id=child
        h1
        h2
    div
    div id=child2
        h1
        h2
    div
div


*/


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