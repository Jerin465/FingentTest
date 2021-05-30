import { Component, OnInit } from '@angular/core';
import { CountryService } from './../../services/country.service';
import { Country } from "../../models";

@Component({
    templateUrl: './country-list.component.html',
    styleUrls: ['./country.scss']
})
export class CountryListComponent implements OnInit {
    public pageSize: number = 30;
    public totalSize: number;
    public page: number;
    public countryAllData: Array<Country> = [];
    public paginateData: Array<Country> = [];

    constructor(public countryService: CountryService) {}

    ngOnInit(): void {
        this.countryService.getAllCoutries();
        this.getCountryList();
    }

    getCountryList() {
        this.countryService.country.subscribe((data) => {
            this.countryAllData = data;
            this.totalSize = data.length;
            this.pageTrigger(1);
        });
    }
    pageTrigger($event:number) {
        this.page = $event;
        this.paginateData = this.countryAllData.slice(
            (this.page - 1) * this.pageSize,
            (this.page - 1) * this.pageSize + this.pageSize
        );
    }
    searchTrigger($event:String) {
        this.page = 1;
        this.paginateData = this.countryAllData.filter((item: any) => {
            return item.country
                .toLowerCase()
                .includes(
                    $event
                        .toLowerCase()
                        .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize)
                );
        });
        this.totalSize = this.paginateData.length;
    }
    sortTrigger($event) {
        this.countryAllData.sort(this.dynamicSort($event));
        this.pageTrigger(1);
    }
    dynamicSort(property) {
        var sortOrder = 1;
        if (property[0] === '-') {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            var result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
            return result * sortOrder;
        };
    }
}
