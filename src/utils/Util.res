@bs.val external require: string => string = "require"
@bs.val external requireCSS: string => unit = "require"

let kToC = (kDeg: float) => kDeg -. 273.15

let round = d => Js.Float.toFixedWithPrecision(_, ~digits=d)

let makeWeatherIcon = (weatherCode: int): string => `wi wi-owm-${weatherCode |> Js.Int.toString}`

let makeWindIcon = (windDeg: int): string => `wi wi-wind towards-${windDeg |> Js.Int.toString}-deg`

let windDirectionFromDegrees = (degree: int): string => {
  let directions = [
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
    "NNW",
  ]
  let i = (degree->Js.Int.toFloat +. 11.25) /. 22.5
  let position = mod(i->int_of_float, 16)
  directions[position]
}

let msTokmh = (speed: float): float => speed *. 3.6

let toDate = (time: Js.Date.t): string => {
  Js.String.concat(
    Js.Date.getDate(time) |> Js.Float.toString,
    Js.Date.getTime(time) |> Js.Float.toString,
  )
}

let dayTable = Belt.Map.String.fromArray([
  ("0", "Sunday"),
  ("1", "Monday"),
  ("2", "Tuesday"),
  ("3", "Wednesday"),
  ("4", "Thursday"),
  ("6", "Friday"),
])

let getDay = (date: float): string => {
  let optionDay = Belt.Map.String.findFirstBy(dayTable, (k, _) => k == Js.Float.toString(date))
  switch optionDay {
  | None => ""
  | Some((_, v)) => v
  }
}

let getTime = (date: Js.Date.t): string => {
  (date |> Js.Date.getUTCHours |> Js.Float.toString) ++
  ":" ++
  (date |> Js.Date.getUTCMinutes |> Js.Float.toString)
}

let convertToDate = (time: float): string => {
  (time |> Js.Date.fromFloat |> Js.Date.getUTCDay |> getDay) ++
  ", " ++
  (time |> Js.Date.fromFloat |> getTime)
}

let toMs = (second: float) => second *. 1000.

let toPercentage = (maximumValue: float, value: float): float =>
  switch value {
  | value when value > maximumValue => 100.0
  | value => value /. maximumValue *. 100.
  }

let dateToDay: string => string = date => {
  let day = date |> Js.Date.fromString |> Js.Date.getDay
  switch day {
  | day when day == 0.0 => "Sunday"
  | day when day == 1.0 => "Monday"
  | day when day == 2.0 => "Tuesday"
  | day when day == 3.0 => "Wednesday"
  | day when day == 4.0 => "Thursday"
  | day when day == 5.0 => "Friday"
  | day when day == 6.0 => "Saturday"
  | _ => ""
  }
}
