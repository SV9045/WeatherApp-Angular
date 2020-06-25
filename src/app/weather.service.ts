import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(location) {
    // Get request to weather stack api.
    return this.http.get(
      `http://api.weatherstack.com/current?access_key=9006dac10a41e6164b816cc4f581b150&query=${location}`
    );
  }
}
