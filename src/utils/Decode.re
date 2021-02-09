open Types;

let decodeMain = (json): main =>
  Json.Decode.{
    temp: json |> field("temp", float),
    pressure: json |> field("pressure", float),
    humidity: json |> field("humidity", int),
  };
let decodeWeather = (json): weather =>
  Json.Decode.{
    main: json |> field("main", string),
    description: json |> field("description", string),
    icon: json |> field("icon", string),
  };
let decodeWind = (json): wind =>
  Json.Decode.{
    speed: json |> field("speed", float),
    deg: json |> field("deg", float),
  };

let decodeSys = (json): sys => 
  Json.Decode.{
    sunrise: json |> field("sunrise", float),
    sunset: json |> field("sunset", float),
  }

let decodeResponse = (json): response =>
  Json.Decode.{
    id: json |> field("id", int),
    name: json |> field("name", string),
    main: json |> field("main", decodeMain),
    weather: json |> field("weather", array(decodeWeather)),
    wind: json |> field("wind", decodeWind),
    dt: json |> field("dt", float),
    timezone: json |> field("timezone", float),
    visibility: json |> field("visibility", int),
    sys: json |> field("sys", decodeSys),
  };
