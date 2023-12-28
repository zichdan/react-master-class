import React from "react";

import reactDOM from "react-dom"


reactDOM.render( <h1> Hello World!!! </h1>, document.getElementById("root") );

var h1 = document.createElement(h1);
h1.innerHTML = " Hello World ";
document.getElementById("root").appendChild(h1);

