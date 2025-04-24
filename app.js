
    //My First Hello World program by react  Nested elements
    import React from 'react';
    import ReactDOM from 'react-dom/client'; 

    const heading = React.createElement("div", {id:"parent"},
      React.createElement("div", {id:"child"},

        [
            React.createElement("h1",{key: "heading1"},"My First Hello World program by react"), 
            React.createElement("h1",{ key: "heading2"},"Nested elements") 
        ]
      )
    );
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);
