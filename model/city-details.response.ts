export interface CityDetailResponse {
  temp: number;
  date: string;
  time: string;
  condition_code: string;
  description: string;
  currently: string;
  cid: string;
  city: string;
  img_id: string;
  humidity: number;
  cloudiness: number;
  rain: number;
  wind_speedy: string;
  wind_direction: number;
  wind_cardinal: string;
  sunrise: string;
  sunset: string;
  moon_phase: string;
  condition_slug: string;
  city_name: string;
  timezone: string;
  forecast: Forecast[];
}

export interface Forecast {
  date: string;
  weekday: string;
  max: number;
  min: number;
  humidity: number;
  cloudiness: number;
  rain: number;
  rain_probability: number;
  wind_speedy: string;
  sunrise: string;
  sunset: string;
  moon_phase: string;
  description: string;
  condition: string;
}
