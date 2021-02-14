// open Util
Util.requireCSS("./RightSectionStyle.scss");

type dailyWeather = {
  day: string,
  iconUrl: string,
  temp: string,
};

let items: array<dailyWeather> = [
  {day: "Sun", iconUrl: "a", temp: "b"},
  {day: "Mon", iconUrl: "a", temp: "b"},
  {day: "Tue", iconUrl: "a", temp: "b"},
  {day: "Wed", iconUrl: "a", temp: "b"},
  {day: "Thu", iconUrl: "a", temp: "b"},
  {day: "Fri", iconUrl: "a", temp: "b"},
  {day: "Sat", iconUrl: "a", temp: "b"},
];

@react.component
let make = (~weatherData: Shape.Response.t) => {
  React.useEffect1(
    () => {
      Js.log2("new props received", weatherData);
      None;
    },
    [weatherData],
  );

  <div className="row">
    <div className="col py-3 px-5">
      <div className="row">
        {items
         ->Belt.Array.mapWithIndex((index, item) =>
             <div
               key={string_of_int(index)}
               className="col"
               //  <WeatherCard weatherInfo=item />
             />
           )
         ->React.array}
      </div>
      <h4> {"Today's highlights" |> React.string} </h4>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col"> <UVIndex /> </div>
        <div className="col"> <WindStatus wind={weatherData.wind} /> </div>
        <div className="col"> <SunriseSunset sys={weatherData.sys} timezone={weatherData.timezone}/> </div>
        <div className="col"> <Humidity humidity={weatherData.main.humidity} /> </div>
        <div className="col"> <Visibility visibility={weatherData.visibility} /> </div>
        // <div className="col"> <AirQuality airQualityIndex={3} /> </div>
      </div>
    </div>
  </div>;
};
