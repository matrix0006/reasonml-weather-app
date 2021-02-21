Util.requireCSS("./App.scss")

@react.component
let make = () => {
  let (searchTerm, setSearchTerm) = React.useState(() => "Saigon")
  let (weather, _) = Hooks.useWeather(searchTerm)
  let (air, _) = Hooks.useAir(searchTerm)
  let (uvIndex, _) = Hooks.useUvIndex(searchTerm)
  let (forecast, _) = Hooks.useForecast(searchTerm)
  let appState = (weather, air, uvIndex, forecast)

  let onClick = event => {
    setSearchTerm(_ => event)
  }

  switch appState {
  | (Init, _, _, _)
  | (_, Init, _, _)
  | (_, _, Init, _)
  | (_, _, _, Init)
  | (Loading, _, _, _)
  | (_, Loading, _, _)
  | (_, _, Loading, _)
  | (_, _, _, Loading) =>
    <Spinner />
  | (Complete(weatherData), Complete(_), Complete(_), Complete(_)) =>
    <div className="body">
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="left-section"> <LeftSection weatherData=(Complete(weatherData)) onClick={onClick} /> </div>
          <div className="right-section">
            <RightSection appState/>
          </div>
        </div>
      </div>
    </div>
  | (_, _, _, _) => <Spinner />
  }
}
