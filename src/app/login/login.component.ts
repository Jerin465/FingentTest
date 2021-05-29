import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

    constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) {}

    ngOnInit() {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    get f() {
        return this.form.controls;
    }

    onSubmit() {
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        localStorage.setItem('isLoggedin', 'true');
        this.router.navigateByUrl('/dashboard');
        this.loading = false;

    }

    onLoggedin() {

    }
}
