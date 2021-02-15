

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Fetch from "bs-fetch/src/Fetch.bs.js";
import * as Relude_Result from "relude/src/Relude_Result.bs.js";
import * as Error$ReasonmlReactApp from "./Error.bs.js";
import * as Shape$ReasonmlReactApp from "./Shape.bs.js";
import * as Endpoints$ReasonmlReactApp from "./Endpoints.bs.js";

var Action = {};

function parseJsonIfOk(resp) {
  if (resp.ok) {
    return resp.json().then(function (json) {
                  return Promise.resolve(Relude_Result.ok(json));
                }).catch(function (_error) {
                return Promise.resolve(Relude_Result.error(resp));
              });
  } else {
    return Promise.resolve(Relude_Result.error(resp));
  }
}

function getErrorBodyJson(x) {
  if (x.TAG === /* Ok */0) {
    return Promise.resolve(x);
  }
  var resp = x._0;
  return resp.json().then(function (json) {
              return Promise.resolve(Relude_Result.error(Error$ReasonmlReactApp.$$fetch([
                                  resp.status,
                                  resp.statusText,
                                  {
                                    NAME: "json",
                                    VAL: json
                                  }
                                ])));
            });
}

function getErrorBodyText(x) {
  if (x.TAG === /* Ok */0) {
    return Promise.resolve(x);
  }
  var resp = x._0;
  var status = resp.status;
  var statusText = resp.statusText;
  return Promise.resolve(Relude_Result.error(Error$ReasonmlReactApp.$$fetch([
                      status,
                      statusText,
                      {
                        NAME: "text",
                        VAL: "FIXME: show body text instead"
                      }
                    ])));
}

function weather(param) {
  var __x = Endpoints$ReasonmlReactApp.Weather.$$fetch(undefined);
  return fetch(__x, Fetch.RequestInit.make(/* Get */0, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(undefined)).then(parseJsonIfOk).then(getErrorBodyText).then(function (result) {
              return Promise.resolve(Relude_Result.flatMap((function (json) {
                                return Curry._2(Relude_Result.mapError, Error$ReasonmlReactApp.decode, Shape$ReasonmlReactApp.$$Response.decode(json));
                              }), result));
            });
}

function air(param) {
  var __x = Endpoints$ReasonmlReactApp.Air.$$fetch(undefined);
  return fetch(__x, Fetch.RequestInit.make(/* Get */0, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(undefined)).then(parseJsonIfOk).then(getErrorBodyText).then(function (result) {
              return Promise.resolve(Relude_Result.flatMap((function (json) {
                                return Curry._2(Relude_Result.mapError, Error$ReasonmlReactApp.decode, Shape$ReasonmlReactApp.Air.decode(json));
                              }), result));
            });
}

var Decode;

export {
  Decode ,
  Action ,
  parseJsonIfOk ,
  getErrorBodyJson ,
  getErrorBodyText ,
  weather ,
  air ,
  
}
/* Relude_Result Not a pure module */
