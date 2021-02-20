open Util
Util.requireCSS("./LeftSection.scss")

@react.component
let make = (~weatherData: Shape.Response.t) => {
  <div className="row">
    <div className="col col-wrapper py-3">
      <div className="flex-row d-flex text-input-wrapper spacing">
        <input className="text-input" placeholder="Search for places..." />
        <div className="icon-wrapper">
          <img className="icon" src={require("../../assets/icons/location.png")} />
        </div>
      </div>
      <i className={`${makeWeatherIcon(weatherData.cod)} weather-icon icon-large spacing-small`} />
      <div className="spacing-small temparature-text large-text">
        {weatherData.main.temp |> kToC |> round(1) |> React.string}
      </div>
      <div className="spacing-small">
        {weatherData.dt |> toMs |> convertToDate |> React.string}
      </div>
      <hr className="spacing-small" />
      {weatherData.weather
      ->Belt.Array.mapWithIndex((i, weather) => {
        <div
          key={i |> Js.Int.toString} className="flex-row d-flex spacing-small align-items-center">
          <span className="weather-icon icon-small mr-3">
            <i className={makeWeatherIcon(weather.id)} />
          </span>
          <div>
            {weather.main |> React.string}
            <span className="mx-2"> {"-" |> React.string} </span>
            {weather.description |> React.string}
          </div>
        </div>
      })
      ->React.array}
    </div>
  </div>
}
