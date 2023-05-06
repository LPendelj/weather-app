import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public res: any;
  daysList: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  constructor(private weatherApi: WeatherService) {}

  ngOnInit(){
    this.getWeatherData()
  }

  handleRefresh(event: any) {
    this.getWeatherData(event);
  }

  getWeatherData(event?: any){
    this.weatherApi.getWeatherData().subscribe((response)=>{
      this.res = response;
      console.log(this.res);
      if(event){
        event.target.complete();
      }
    })
  }



}
