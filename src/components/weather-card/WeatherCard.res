Util.requireCSS("./WeatherCard.scss")

@react.component
let make = (~weatherInfo: Shape.ForecastData.t) => {
  <div className="card text-center custom-card">
    <div className="card-body py-3">
      <div className="mb-5 card-custom-title">
        {weatherInfo.datetime |> Util.dateToDay |> React.string}
      </div>
      <i
        className={`wi wi-owm-${weatherInfo.weather.code |> Js.Int.toString} weather-icon mb-5 custom-icon`}
      />
      <div className="card-temp"> {weatherInfo.temp |> Js.Float.toString |> React.string} </div>
    </div>
  </div>
}
