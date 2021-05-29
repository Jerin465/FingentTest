import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Statistics } from '../models';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

const baseUrl = `${environment.apiUrl}/v2/countries`;

@Injectable({
    providedIn: 'root'
})
export class CountryService {
    constructor(private http: HttpClient) {}

    getAllCoutries() {
        return this.http.get(baseUrl).pipe(
            map((data: Statistics) => {
                return data;
            }),
            catchError((error) => {
                return throwError('Something went wrong!');
            })
        );
    }
}
