

import * as Caml_array from "bs-platform/lib/es6/caml_array.js";
import * as Belt_MapString from "bs-platform/lib/es6/belt_MapString.js";

function kToC(kDeg) {
  return kDeg - 273.15;
}

function round(__x) {
  return __x.toFixed(2);
}

function makeIcon(weatherId) {
  return "wi wi-owm-" + String(weatherId) + "weather-icon-small";
}

function windDirectionFromDegrees(degree) {
  var directions = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW"
  ];
  var i = (degree + 11.25) / 22.5 | 0;
  var position = i % 16;
  return Caml_array.get(directions, position);
}

function msTokmh(speed) {
  return speed * 3.6;
}

function toDate(time) {
  return time.getTime().toString().concat(time.getDate().toString());
}

var dayTable = Belt_MapString.fromArray([
      [
        "0",
        "Sunday"
      ],
      [
        "1",
        "Monday"
      ],
      [
        "2",
        "Tuesday"
      ],
      [
        "3",
        "Wednesday"
      ],
      [
        "4",
        "Thursday"
      ],
      [
        "6",
        "Friday"
      ]
    ]);

function getDay(date) {
  var optionDay = Belt_MapString.findFirstBy(dayTable, (function (k, param) {
          return k === date.toString();
        }));
  if (optionDay !== undefined) {
    return optionDay[1];
  } else {
    return "";
  }
}

function getTime(date) {
  return date.getUTCHours().toString() + ":" + date.getUTCMinutes().toString();
}

function convertToDate(time) {
  return getDay(new Date(time).getUTCDay()) + ", " + getTime(new Date(time));
}

function toMs(second) {
  return second * 1000;
}

function toPercentage(maximumValue, value) {
  if (value > maximumValue) {
    return 100.0;
  } else {
    return value / maximumValue * 100;
  }
}

function dateToDay(date) {
  var day = new Date(date).getDay();
  if (day === 0.0) {
    return "Sunday";
  } else if (day === 1.0) {
    return "Monday";
  } else if (day === 2.0) {
    return "Tuesday";
  } else if (day === 3.0) {
    return "Wednesday";
  } else if (day === 4.0) {
    return "Thursday";
  } else if (day === 5.0) {
    return "Friday";
  } else if (day === 6.0) {
    return "Saturday";
  } else {
    return "";
  }
}

export {
  kToC ,
  round ,
  makeIcon ,
  windDirectionFromDegrees ,
  msTokmh ,
  toDate ,
  dayTable ,
  getDay ,
  getTime ,
  convertToDate ,
  toMs ,
  toPercentage ,
  dateToDay ,
  
}
/* dayTable Not a pure module */
