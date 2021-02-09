[@react.component]
let make = (~weatherInfo: Types.response) => {
  <div className="card text-center custom-card">
    <div className="card-body py-3">
      <div className="mb-3"> {weatherInfo.name |> React.string} </div>
      <i className="wi wi-day-cloudy weather-icon mb-3 custom-icon " />
      <div> {weatherInfo.name |> React.string} </div>
    </div>
  </div>;
};
