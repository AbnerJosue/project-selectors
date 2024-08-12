import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorsPageComponent } from './pages/selectors-page/selectors-page.component';
import { CountryRoutingModule } from './country-routing.module';



@NgModule({
  declarations: [
    SelectorsPageComponent
  ],
  imports: [
    CommonModule, 
    CountryRoutingModule
  ]
})
export class CountryModule { }
