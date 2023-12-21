import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherContainerComponent } from './containers/weather-container/weather-container.component';

@NgModule({
  declarations: [
    WeatherContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WeatherContainerComponent
  ]
})
export class WeatherModule { }
