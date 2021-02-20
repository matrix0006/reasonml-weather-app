

import * as React from "react";
import * as ReactDOMStyle from "reason-react/src/ReactDOMStyle.bs.js";
import * as Card$ReasonmlReactApp from "../card/Card.bs.js";
import * as Util$ReasonmlReactApp from "../../utils/Util.bs.js";

require("./UVIndex.scss");

function UVIndex(Props) {
  var uvIndex = Props.uvIndex;
  var customStyle = {};
  return React.createElement(Card$ReasonmlReactApp.make, {
              children: null
            }, React.createElement("h5", {
                  className: "card-title mb-4"
                }, "UV index"), React.createElement("div", {
                  className: "flex-row d-flex align-items-center justify-content-center"
                }, React.createElement("div", {
                      className: "semi-donut",
                      style: ReactDOMStyle.unsafeAddProp(customStyle, "--percentage", Util$ReasonmlReactApp.toPercentage(12.0, uvIndex).toString())
                    }, React.createElement("span", {
                          className: "index-value"
                        }, Util$ReasonmlReactApp.round(0, uvIndex)))));
}

var make = UVIndex;

export {
  make ,
  
}
/*  Not a pure module */
