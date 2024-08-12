import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorsPageComponent } from './pages/selectors-page/selectors-page.component';
import { CountryRoutingModule } from './country-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SelectorsPageComponent
  ],
  imports: [
    CommonModule, 
    CountryRoutingModule,
    ReactiveFormsModule
  ]
})
export class CountryModule { }
