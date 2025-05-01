
    //My First Hello World program by react  Nested elements
    import React from 'react';
    import ReactDOM from 'react-dom/client'; 

    //Created the H1 Element by the react

    const heading = React.createElement("div", {id:"parent"},
      React.createElement("div", {id:"child"},

        [
            React.createElement("h1",{key: "heading1"},"My First Hello World program by react"), 
            React.createElement("h1",{ key: "heading2"},"Nested elements") 
        ]
      )
    );

    //Created the H1 Element by the JSX

    const jsxHeaing = <h1 id="heading">Namste REact by JSX</h1>;
    console.log(jsxHeaing);
   
    const root = ReactDOM.createRoot(document.getElementById("root"));
    

    //React-Functional Component- NEW both statements HeadingComponent & HeadingComponent2 are same as 
    // HeadingComponent2 is the shortcut for one liner code

    const HeadingComponent = () => {
      return <h1>Namaste React by functional component </h1>;
    
    };

    //component composition Example below also i can add the JS code inside the round braces by using curly braces
    //example
    const number = 1000; //we can use this JS no inside the below code as JSX is the mix of HTML and JS
    //I can write any JS code inside the curly braces
    const HeadingComponent3 = () =>{
     return(
      <div>
        {jsxHeaing}
         <h1>{number}</h1>
         <h2>{console.log(HeadingComponent)}</h2>
        <HeadingComponent />  
        <HeadingComponent></HeadingComponent> //Bothe statements are same 
         <h1>Namaste React by functional component without return "//component composition Example"</h1> 
      </div>
     );
    };

    const HeadingComponent2 = () => <h1>Namaste React by functional component without return </h1>;//one liner code
   
    root.render(<HeadingComponent3/>);


