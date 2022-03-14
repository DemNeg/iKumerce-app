import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Country} from "../models/country";

/*
Created by : Singou Dembele

This service is used manage the country code from the json file
 */


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http:HttpClient) { }

  getCountries():Observable<Country>{
    return this.http.get<Country>('./../../../assets/json/country-codes.json');
  }
}
