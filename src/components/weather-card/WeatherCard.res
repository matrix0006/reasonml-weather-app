open Util

@react.component
let make = (~weatherInfo: Shape.ForecastData.t) => {
 <div className="card text-center custom-card">
   <div className="card-body py-3">
     <div className="mb-5"> {weatherInfo.datetime |> dateToDay |> React.string} </div>
     <i className="wi wi-day-cloudy weather-icon mb-5 custom-icon " />
     <div> {weatherInfo.temp |> Js.Float.toString |> React.string} </div>
   </div>
 </div>;
};
