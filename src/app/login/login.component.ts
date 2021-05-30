import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertMsgService } from '../shared/services';
import { User } from '../models';
import { AuthService } from './../shared/guard/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private alertService: AlertMsgService,
        private authService: AuthService
    ) {}

    ngOnInit() {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    ngAfterViewInit(): void {
        this.alertService.info('Username & Password is fingent');
    }

    get f() {
        return this.form.controls;
    }

    onSubmit() {
        this.alertService.clear();
        this.loading = true;
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        console.log(this.form.value);
        const data: User = this.form.value;
        setTimeout(() => {
            let isValid: boolean = this.authService.isValidUser(data);
            if (isValid) {
                localStorage.setItem('isLoggedin', 'true');
                this.router.navigateByUrl('/dashboard');
            } else {
                this.alertService.error('incorrect username or password', { autoClose: true });
            }
            this.loading = false;
        }, 1000);
    }
}
