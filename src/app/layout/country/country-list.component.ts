import { Component, OnInit } from '@angular/core';
import { CountryService } from './../../services/country.service';

@Component({
    templateUrl: './country-list.component.html',
    styleUrls: ['./country.scss']

})
export class CountryListComponent implements OnInit {
    public pageSize: number = 30;
    public totalSize: number;
    public countryAllData: any;
    public paginateData: any;
    public page: number;

    constructor(public countryService: CountryService) {}

    ngOnInit(): void {
        this.getCountryList();
    }

    getCountryList() {
        this.countryService.getAllCoutries().subscribe((result: any) => {
            if (result) {
                this.countryAllData = result;
                this.totalSize = result.length;
                this.pageTrigger(1);
            }
        });
    }
    pageTrigger($event) {
        this.page = $event;
        this.paginateData = this.countryAllData.slice(
            (this.page - 1) * this.pageSize,
            (this.page - 1) * this.pageSize + this.pageSize
        );
        console.log(this.paginateData);

    }
}
