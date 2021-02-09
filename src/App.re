Util.requireCSS("./AppStyle.scss");

type state =
  | LoadingWeather
  | ErrorFetchingWeather
  | LoadedWeather(Types.response);

[@react.component]
let make = () => {
  let (state, setState) = React.useState(() => LoadingWeather);

  React.useEffect1(
    () => {
      Js.Promise.(
        Fetch.fetch(
          "http://api.openweathermap.org/data/2.5/weather?q=Bangkok&appid=486699348d13d23e215f3c3415bfb96d",
        )
        |> then_(Fetch.Response.json)
        |> then_(json => {
             setState(_ => LoadedWeather(json |> Decode.decodeResponse));
             Js.Promise.resolve();
           })
        |> catch(_err => {
             setState(_ => ErrorFetchingWeather);
             Js.Promise.resolve();
           })
        |> ignore
      );
      None;
    },
    [||],
  );

  switch (state) {
  | LoadingWeather => <span> {"Loading" |> React.string} </span>
  | ErrorFetchingWeather =>
    <span> {"Error occured. Please try again" |> React.string} </span>
  | LoadedWeather(weatherData) =>
    <div className="body">
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="left-section"> <LeftSection weatherData /> </div>
          <div className="right-section"> <RightSection weatherData /> </div>
        </div>
      </div>
    </div>
  };
};
