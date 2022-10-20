import { Component, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/interfaces/weather.interface';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-panel',
  templateUrl: './weather-panel.component.html',
  styleUrls: ['./weather-panel.component.css']
})
export class WeatherPanelComponent implements OnInit {

  city: string = '';
  weatherData!: WeatherData;
  weatherNotFoundErr: boolean = false;
  loading: boolean = false;

  constructor(
    private readonly weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    if ('geolocation' in navigator) {
      this.weatherNotFoundErr = false;
      this.loading = true;

      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;

          this.weatherService.getWeatherDataByCoordinates({
            latitude,
            longitude
          }).subscribe({
            next: (data: WeatherData) => {
              this.city = data.name;
              this.weatherData = data;
              this.loading = false;
            },
            error: err => {
              this.loading = false;
              this.weatherNotFoundErr = true;
            },
          });
        },
        err => {
          console.error(err);
          this.loading = false;
        }
      )
    }
  }

  findWeatherData() {
    this.weatherNotFoundErr = false;
    this.loading = true;
    this.weatherService.getWeatherDataByCity(this.city).subscribe({
      next: (data: WeatherData) => {
        this.weatherData = data;
        this.loading = false;
      },
      error: err => {
        this.loading = false;
        this.weatherNotFoundErr = true;
      },
    });
  }

}
