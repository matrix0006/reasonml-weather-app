type main = {
  temp: float,
  pressure: float,
  humidity: int,
};

type weather = {
  main: string,
  description: string,
  icon: string,
};

type wind = {
  speed: float,
  deg: float,
};

type sys = {
  sunrise: float,
  sunset:  float,
}

type response = {
  id: int,
  main: main,
  name: string,
  weather: array(weather),
  wind,
  dt: float,
  timezone: float,
  visibility: int,
  sys: sys
};
