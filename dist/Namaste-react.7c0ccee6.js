//My First Hello World program by react  Nested elements
const heading = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, " My First Hello World program by react"),
    React.createElement("h1", {}, "Nested elements")
]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//# sourceMappingURL=Namaste-react.7c0ccee6.js.map
