import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    templateUrl: './country-home.component.html',
    animations: [routerTransition()]

})
export class CountryHomeComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
