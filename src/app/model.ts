export interface WeatherDay {
  date: string;
  icon: string;
  status: string;
  wind: number;
  humidity: number;
  visibility: number;
  pressure: number;
  temps: Array<number>;
}
