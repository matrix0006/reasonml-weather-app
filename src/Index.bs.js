

import * as React from "react";
import * as ReactDOMRe from "reason-react/src/legacy/ReactDOMRe.bs.js";
import * as App$ReasonmlReactApp from "./App.bs.js";

require("./styles/styles.scss");

ReactDOMRe.renderToElementWithId(React.createElement(App$ReasonmlReactApp.make, {}), "root");

export {
  
}
/*  Not a pure module */
