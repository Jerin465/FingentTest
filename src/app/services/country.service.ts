import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Statistics } from '../models';
import { catchError, map } from 'rxjs/operators';
import { BehaviorSubject, throwError } from 'rxjs';

const baseUrl = `${environment.apiUrl}/v2/countries`;

@Injectable({
    providedIn: 'root'
})
export class CountryService {
    private countryList = new BehaviorSubject<any[]>([]);
    country = this.countryList.asObservable();

    private countryObj = new BehaviorSubject<any>([]);
    editCountry = this.countryObj.asObservable();

    constructor(private http: HttpClient) {}

    getAllCoutries() {
        this.http.get(baseUrl).subscribe(
            (data: any) => {
                this.countryList.next(data);
            },
            (error) => console.log('Error in Loading data.')
        );
    }

    updateCountry(editdata: any) {
        var countryList: any;
        this.country.subscribe((data: any) => {
            countryList = data;
            countryList.forEach((item: any, i: any) => {
                if (editdata.countryInfo._id == item.countryInfo._id) {
                    countryList[i] = editdata;
                }
            });
        });
        this.countryList.next(countryList);
    }

}
