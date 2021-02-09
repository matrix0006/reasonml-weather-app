open Util;
Util.requireCSS("./LeftSectionStyle.scss");

[@react.component]
let make = (~weatherData: Types.response) => {
  <div className="row">
    <div className="col col-wrapper py-3">
      <div className="input-group spacing">
        <input className="text-input" placeholder="Search for places ..." />
        <div className="input-group-append">
          <img
            className="icon"
            src={require("../../assets/icons/location.png")}
          />
        </div>
      </div>
      <i className="wi wi-day-cloudy weather-icon-large spacing-small" />
      <div className="spacing-small temparature-text large-text">
        {weatherData.main.temp |> kToC |> round |> React.string}
      </div>
      <div className="spacing-small">
        {weatherData.dt |> toMs |> convertToDate |> React.string}
      </div>
      <hr className="spacing-small" />
      {weatherData.weather
       ->Belt.Array.mapWithIndex((i, weather) => {
           <div
             key={i |> Js.Int.toString}
             className="flex-row d-flex spacing-small">
             <i className={makeIcon(weatherData.id)} />
             <div>
               {weather.main |> React.string}
               <span className="mx-2"> {"-" |> React.string} </span>
               {weather.description |> React.string}
             </div>
           </div>
         })
       ->React.array}
    </div>
  </div>;
};
