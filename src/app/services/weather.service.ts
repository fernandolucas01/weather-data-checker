import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Coordinates } from '../interfaces/coordinates.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getWeatherDataByCity(city: string): Observable<any> {
    return this.http.get(environment.OPEN_WEATHER_MAP_API, {
      params: new HttpParams()
        .set('q', city)
        .set('appid', environment.APPID)
    });
  }

  getWeatherDataByCoordinates(coordinates: Coordinates): Observable<any> {
    return this.http.get(environment.OPEN_WEATHER_MAP_API, {
      params: new HttpParams()
        .set('lat', coordinates.latitude)
        .set('lon', coordinates.longitude)
        .set('appid', environment.APPID)
    });
  }
}
