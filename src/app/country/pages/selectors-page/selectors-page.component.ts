import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService  } from '../../services/country.service';
import { Region, SmallCountry } from '../../interfaces/country.interfaces';
import { filter, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selectors-page',
  templateUrl: './selectors-page.component.html',
  styleUrl: './selectors-page.component.css'
})
export class SelectorsPageComponent implements OnInit {

  public myForm: FormGroup;
  public countriesByRegion: SmallCountry[] = [];
  public borders: SmallCountry[] = [];

  constructor(
      private fb: FormBuilder,
      private countriesService: CountriesService,
    ) {
    this.myForm = this.fb.group({
      region: [ '', Validators.required ],
      country: [ '', Validators.required ],
      border: [ '', Validators.required ],
    });
  } 

  ngOnInit(): void {
    this.onRegionChanged();    
    this.onCountryChanged();
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


  onCountryChanged(): void {
    this.myForm.get('country')?.valueChanges
    .pipe(
      tap( () => this.myForm.get('border')!.setValue('')),
      filter( ( value: string ) => value.length > 0 ),
      switchMap( ( alphaCode ) => this.countriesService.getCountryByAlphaCode( alphaCode ) ),
      switchMap( country => this.countriesService.getCountryBordersByCodes( country.borders ) )
    )  
    .subscribe( countries => { 
      this.borders = countries;
    });
  }
}
