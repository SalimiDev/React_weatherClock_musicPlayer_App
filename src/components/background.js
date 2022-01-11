//Import Svg Weather Icons
const reqsvgs = require.context("../icons/weatherPack", true, /\.svg$/);
const paths = reqsvgs.keys();
const svgs = paths.map((path) => reqsvgs(path));

const bg_URL = [
  "https://wallpaperaccess.com/download/",
  "https://images.wallpaperscraft.com/image/single/",
  "https://wallpapercave.com/wp/",
  "https://wallpapersprinted.com/download/2/",
];

const Icons = {
  clearSky: svgs[5],
  fewClouds: svgs[105],
  scatteredClouds: svgs[9],
  brokenClouds: svgs[78],
  showerRain: svgs[99],
  rain: svgs[81],
  thunderstorm: svgs[166],
  snow: svgs[139],
  mist: svgs[65],
  default:svgs[12]
};

export const background = (WeatherData) => {
  const { id } = Array.isArray(WeatherData.weather) && WeatherData.weather[0];
  const theme = {};

  switch (id) {
    case 200:
      theme.city = bg_URL[0] + "thunderstorm-1563521";
      theme.icon = Icons.thunderstorm;
      break;
    case 201:
      theme.city = bg_URL[1] + "pier_sea_lighthouse_235071_2560x1600.jpg";
      theme.icon = Icons.thunderstorm;
      break;
    case 202:
      theme.city = bg_URL[0] + "thunderstorm-1358615";
      theme.icon = Icons.thunderstorm;
      break;
    case 210:
      theme.city = bg_URL[0] + "lightning-125040";
      theme.icon = Icons.thunderstorm;
      break;
    case 211:
      theme.city = bg_URL[0] + "thunderstorm-1563467";
      theme.icon = Icons.thunderstorm;
      break;
    case 212:
      theme.city = bg_URL[0] + "thunderstorm-1563505";
      theme.icon = Icons.thunderstorm;
      break;
    case 221:
      theme.city = bg_URL[0] + "severe-thunderstorm-6093296";
      theme.icon = Icons.thunderstorm;
      break;
    case 230:
      theme.city = bg_URL[0] + "heavy-rain-storm-4654965";
      theme.icon = Icons.thunderstorm;
      break;
    case 231:
      theme.city = bg_URL[0] + "spring-storm-3073837";
      theme.icon = Icons.thunderstorm;
      break;
    case 232:
      theme.city = bg_URL[0] + "desert-rain-3620447";
      theme.icon = Icons.thunderstorm;
      break;
    case 300:
      theme.city = bg_URL[0] + "girl-in-rain-3057098";
      theme.icon = Icons.showerRain;
      break;
    case 301:
      theme.city = bg_URL[0] + "girl-in-rain-3126483.jpg";
      theme.icon = Icons.showerRain;
      break;
    case 302:
      theme.city = bg_URL[0] + "spring-rain-1535885";
      theme.icon = Icons.showerRain;
      break;
    case 310:
      theme.city = bg_URL[0] + "rain-164469";
      theme.icon = Icons.showerRain;
      break;
    case 311:
      theme.city = bg_URL[0] + "most-beautiful-rain-1359112";
      theme.icon = Icons.showerRain;
      break;
    case 312:
      theme.city = bg_URL[0] + "girl-in-rain-2248649";
      theme.icon = Icons.showerRain;
      break;
    case 313:
      theme.city = bg_URL[1] + "girl_umbrella_rain_160384_2560x1440.jpg";
      theme.icon = Icons.showerRain;
      break;
    case 314:
      theme.city =
        bg_URL[1] + "silhouette_umbrella_night_city_139799_2560x1440.jpg";
      theme.icon = Icons.showerRain;
      break;
    case 321:
      theme.city = bg_URL[1] + "night-city-rain-lights-2203787";
      theme.icon = Icons.showerRain;
      break;
    case 500:
      theme.city = bg_URL[0] + "night-city-rain-lights-1093687";
      theme.icon = Icons.rain;
      break;
    case 501:
      theme.city =bg_URL[0] + "woman_red_umbrella_rain-wallpaper-2560x1600.jpg";
      theme.icon = Icons.rain;
      break;
    case 502:
      theme.city = bg_URL[0] + "winter-307407";
      theme.icon = Icons.rain;
      break;
    case 503:
      theme.city = bg_URL[0] + "rain-164370";
      theme.icon = Icons.rain;
      break;
    case 504:
      theme.city = bg_URL[0] + "most-beautiful-rain-674201";
      theme.icon = Icons.rain;
      break;
    case 511:
      theme.city = bg_URL[0] + "dancing-in-the-rain-3375927";
      theme.icon = Icons.snow;
      break;
    case 520:
      theme.city = bg_URL[2] + "wp8437292.jpg";
      theme.icon = Icons.showerRain;
      break;
    case 521:
      theme.city = bg_URL[0] + "rain-in-paris-690678";
      theme.icon = Icons.showerRain;
      break;
    case 522:
      theme.city = bg_URL[0] + "rain-164391";
      theme.icon = Icons.showerRain;
      break;
    case 531:
      theme.city = bg_URL[0] + "heavy-rain-storm-2148731";
      theme.icon = Icons.showerRain;
      break;

    case 600:
      theme.city = bg_URL[0] + "winter-394062";
      theme.icon = Icons.snow;
      break;
    case 602:
      theme.city = bg_URL[0] + "winter-118094";
      theme.icon = Icons.snow;
      break;
    case 611:
      theme.city = bg_URL[0] + "winter-394272";
      theme.icon = Icons.snow;
      break;
    case 612:
      theme.city = bg_URL[0] + "skiing-475129";
      theme.icon = Icons.snow;
      break;
    case 613:
      theme.city = bg_URL[0] + "winter-83079";
      theme.icon = Icons.snow;
      break;
    case 615:
      theme.city = bg_URL[0] + "skiing-475150";
      theme.icon = Icons.snow;
      break;
    case 616:
      theme.city = bg_URL[0] + "snowflake-1333032";
      theme.icon = Icons.snow;
      break;
    case 620:
      theme.city = bg_URL[2] + "winter-394258";
      theme.icon = Icons.snow;
      break;
    case 621:
      theme.city = bg_URL[0] + "winter-394100";
      theme.icon = Icons.snow;
      break;
    case 622:
      theme.city = bg_URL[0] + "wp7998841.jpg";
      theme.icon = Icons.snow;
      break;
    case 701:
      theme.city = bg_URL[0] + "misty-2165454";
      theme.icon = Icons.mist;
      break;
    case 711:
      theme.city = bg_URL[0] + "smoky-mountains-4k-3786319";
      theme.icon = Icons.mist;
      break;
    case 721:
      theme.city = bg_URL[2] + "wp8675484.jpg";
      theme.icon = Icons.mist;
      break;
    case 731:
      theme.city = bg_URL[0] + "desert_dunes_dust_174269_2560x1600.jpg";
      theme.icon = Icons.mist;
      break;
    case 741:
      theme.city = bg_URL[0] + "san-francisco-fog-5068167";
      theme.icon = Icons.mist;
      break;
    case 751:
      theme.city = bg_URL[0] + "sandstorm-2346945";
      theme.icon = Icons.mist;
      break;
    case 761:
      theme.city = bg_URL[0] + "sandstorm-2346948";
      theme.icon = Icons.mist;
      break;
    case 762:
      theme.city = bg_URL[0] + "volcanic-eruptions-124994";
      theme.icon = Icons.mist;
      break;
    case 771:
      theme.city = bg_URL[0] + "windy-6536919";
      theme.icon = Icons.mist;
      break;
    case 781:
      theme.city = bg_URL[0] + "wp2104071.jpg";
      theme.icon = Icons.mist;
      break;
    case 800:
      theme.city = bg_URL[0] + "desert-sky-920267";
      theme.icon = Icons.clearSky;
      break;
    case 801:
      theme.city = bg_URL[0] + "hd-51384";
      theme.icon = Icons.fewClouds;
      break;
    case 802:
      theme.city = bg_URL[0] + "cloud-104886";
      theme.icon = Icons.scatteredClouds;
      break;
    case 803:
      theme.city = bg_URL[0] + "new-zeland-nature-121595";
      theme.icon = Icons.brokenClouds;
      break;
    case 804:
      theme.city = bg_URL[0] + "clouds-hd-2131077";
      theme.icon = Icons.brokenClouds;
      break;

    default:
      theme.city = bg_URL[0] + "satellite-301766";
      theme.icon = Icons.default;
      break;
  }

  return theme;
};
