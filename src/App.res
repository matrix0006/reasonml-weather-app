Util.requireCSS("./App.scss")

@react.component
let make = () => {
  let (searchTerm, setSearchTerm) = React.useState(() => "Saigon")
  let (weather, _) = Hooks.useWeather(searchTerm)
  let (air, _) = Hooks.useAir(searchTerm)
  let (uvIndex, _) = Hooks.useUvIndex(searchTerm)
  let (forecast, _) = Hooks.useForecast(searchTerm)
  let completeState = (weather, air, uvIndex, forecast)

  let onClick = event => {
    setSearchTerm(_ => event)
  }

  <div className="body">
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="left-section"> <LeftSection weatherData=weather onClick={onClick} /> </div>
        <div className="right-section"> <RightSection completeState /> </div>
      </div>
    </div>
  </div>
}
