
    const heading = React.createElement("div", {id:"parent"},
        React.createElement("div", {id:"child"},
        [React.createElement("h1",{}," My First Hello World programme by react"), 
         React.createElement("h1",{},"Nested elements") ]));
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);
