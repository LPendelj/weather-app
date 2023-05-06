import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(): Observable<any>{
    let lat = 44.81;
    let lon = 20.46;
    let apiId = '57de7033737547b6ae990a71cd382747'

    const queryString = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiId}`;

    return this.http.get(queryString);
  }

}
