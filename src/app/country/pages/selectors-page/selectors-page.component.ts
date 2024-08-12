import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryService } from '../../services/country.service';
import { Region, SmallCountry } from '../../interfaces/country.interfaces';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selectors-page',
  templateUrl: './selectors-page.component.html',
  styleUrl: './selectors-page.component.css'
})
export class SelectorsPageComponent implements OnInit {

  public myForm: FormGroup;
  public countriesByRegion: SmallCountry[] = [];


  constructor(
      private fb: FormBuilder,
      private countriesService: CountryService
    ) {
    this.myForm = this.fb.group({
      region: [ '', Validators.required ],
      country: [ '', Validators.required ],
      border: [ '', Validators.required ],
    });
  } 

  ngOnInit(): void {
    this.onRegionChanged();    
  }

  get regions(): Region[] { 
    return this.countriesService.regions;
  }

  onRegionChanged(): void {
    this.myForm.get('region')?.valueChanges
    .pipe(
      tap( () => this.myForm.get('country')!.setValue('')),
      switchMap( ( region ) => this.countriesService.getCountriesByRegion( region ) )
    )  
    .subscribe( countries => { 
      this.countriesByRegion = countries
    });
  }

}
