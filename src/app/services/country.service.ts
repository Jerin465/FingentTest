import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { Country } from '../models';

const baseUrl = `${environment.apiUrl}/v2/countries`;

@Injectable({
    providedIn: 'root'
})
export class CountryService {
    private countryList = new BehaviorSubject<Country[]>([]);
    country = this.countryList.asObservable();

    constructor(private http: HttpClient) {}

    getAllCoutries() {
        this.http.get(baseUrl).subscribe(
            (data: Country[]) => {
                this.countryList.next(data);
            },
            (error) => console.log('Error in Loading data.')
        );
    }

    updateCountry(editdata: Country) {
        var countryList: Country[];
        this.country.subscribe((data: Country[]) => {
            countryList = data;
            countryList.forEach((item: Country, i: number) => {
                if (editdata.countryInfo._id == item.countryInfo._id) {
                    countryList[i] = editdata;
                }
            });
        });
        this.countryList.next(countryList);
    }
}
