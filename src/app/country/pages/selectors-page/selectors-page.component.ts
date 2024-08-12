import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryService } from '../../services/country.service';
import { Region } from '../../interfaces/country.interfaces';

@Component({
  selector: 'app-selectors-page',
  templateUrl: './selectors-page.component.html',
  styleUrl: './selectors-page.component.css'
})
export class SelectorsPageComponent {

  public myForm: FormGroup;

  constructor(
      private fb: FormBuilder,
      private countriesService: CountryService
    ) {
    this.myForm = this.fb.group({
      region: [ '', Validators.required ],
      country: [ '', Validators.required ],
      borders: [ '', Validators.required ],
    });
  }


  get regions(): Region[] { 
    return this.countriesService.regions;
  }


}
