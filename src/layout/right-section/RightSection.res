open Relude.Globals
Util.requireCSS("./RightSection.scss");

@react.component
let make = (~weatherData: Shape.Response.t, ~airData: Shape.Air.t, ~uvIndex: Shape.UvIndex.t, ~forecast: Shape.Forecast.t) => {
  let uvDataOpt = uvIndex.data |> Array.head
  let uvData = switch (uvDataOpt) {
    | Some(uvData) => uvData.uv
    | None => 0
  }

  <div className="row">
    <div className="col py-3 px-5">
      <div className="row">
        // |> doesn't work for some reason
        {Array.take(7, Array.drop(1, forecast.data)) -> Belt.Array.mapWithIndex((index, item) => 
            <div key={string_of_int(index)}
              className="col"
            >
               <WeatherCard weatherInfo=item /> 
              </div>
           ) ->React.array}
      </div>
      <h4> {"Today's highlights" |> React.string} </h4>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col"> <UVIndex uvIndex={uvData} /> </div>
        <div className="col"> <WindStatus wind={weatherData.wind} /> </div>
        <div className="col"> <SunriseSunset sys={weatherData.sys} timezone={weatherData.timezone}/> </div>
        <div className="col"> <Humidity humidity={weatherData.main.humidity} /> </div>
        <div className="col"> <Visibility visibility={weatherData.visibility} /> </div>
        <div className="col"> <AirQuality air={airData.data.aqi} /> </div>
      </div>
    </div>
  </div>;
};
