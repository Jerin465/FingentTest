import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CountryService } from './../../services/country.service';
import { AlertMsgService } from '../../shared/services';

@Component({
    templateUrl: './country-edit.component.html'
})
export class CountryEditComponent implements OnInit {
    editData: any;
    form: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder,
        private countryService: CountryService,
        private alertService:AlertMsgService
    ) {}

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            cases: ['', Validators.required],
            deaths: ['', Validators.required],
            recovered: ['', Validators.required],
            tests: ['', Validators.required]

        });
        this.countryService.getAllCoutries();
        this.fetchCountry();
    }

    get f() {
        return this.form.controls;
    }

    fetchCountry() {
        const id: number = this.route.snapshot.params['id'];
        this.countryService.country.subscribe((data: any) => {
            this.editData = data.find((item) => item.countryInfo._id == id);
            this.form.patchValue(this.editData);
        });
    }

    onSubmit() {
        this.submitted = true;
        if (this.form.invalid) {
            this.alertService.error('Please enter valid data', { autoClose: true });
            return;
        }

        this.loading = true;
        this.updateCountry();
    }
    updateCountry() {
        setTimeout(() => {
        const data = Object.assign(this.editData, this.form.value);
        this.countryService.updateCountry(data);
        this.loading = false;
        this.alertService.success('Updated Succesfully', { autoClose: true });
        }, 1000);
        setTimeout(() => {
        this.router.navigate(['/country']);
        }, 2000);
    }
}
