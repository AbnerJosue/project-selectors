import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Region } from '../interfaces/country.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private _regions: Region[] = [ Region.Africa, Region.Americas, Region.Asia, Region.Europe, Region.Oceania ];

  constructor(http: HttpClient) { }

  get regions(): Region[] {
    return this._regions;
  }


}
