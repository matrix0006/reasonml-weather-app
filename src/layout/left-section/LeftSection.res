open Util
open Relude_Globals
Util.requireCSS("./LeftSection.scss")

@react.component
let make = (~weatherData: AsyncResult.t<Shape.Response.t, Error.t>, ~onClick) => {
  let (value, setValue) = React.useState(() => "")
  let onSubmit = e => {
    ReactEvent.Form.preventDefault(e)
    onClick(value)
  }

  <div className="row">
    <div className="col col-wrapper py-3">
      <form onSubmit className="flex-row d-flex text-input-wrapper spacing">
        <input
          onChange={event => event->valueFromEvent |> setValue}
          value
          className={switch weatherData {
          | Complete(Error(_)) => "text-input border border-danger"
          | Complete(Ok(_)) | _ => "text-input"
          }}
          placeholder="Enter city name..."
        />
        <button type_="submit" className="icon-wrapper">
          <img className="icon" src={require("../../assets/icons/location.png")} />
        </button>
      </form>
      {switch weatherData {
      | Init | Loading | Reloading(_) => <Spinner />
      | Complete(Error(_)) =>
        <span className="text-danger">
          {"City doesn't exist. Please try again" |> React.string}
        </span>
      | Complete(Ok(weatherData)) => <>
          <i
            className={`${makeWeatherIcon(weatherData.cod)} weather-icon icon-large spacing-small`}
          />
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
              key={i |> Js.Int.toString}
              className="flex-row d-flex spacing-small align-items-center">
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
        </>
      }}
    </div>
  </div>
}
