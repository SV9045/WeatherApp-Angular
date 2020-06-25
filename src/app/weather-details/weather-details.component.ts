import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {
  weatherForm: FormGroup;
  weatherData: any;

  constructor(
    private formbuilder: FormBuilder,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.weatherForm = this.formbuilder.group({
      locationInput: ['', [Validators.required]]
    });
  }

  onSubmit(value) {
    this.weatherService.getWeather(value.locationInput).subscribe((data) => {
      this.weatherData = data;
      // console.log(this.weatherData);
    });
    this.weatherForm.reset();
  }
}
