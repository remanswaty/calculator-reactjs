import { render } from "react-dom";
import React from "react";
const App = () => {
    return (
        <div>
            <h1>Calculator rendered</h1>
        </div>
    );
}

render(<App/>, document.getElementById("root"));