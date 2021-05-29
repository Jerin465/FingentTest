import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from '../../shared';
import { StatModule,PaginationModule } from '../../shared';


import { CountyRoutingModule } from './county-routing.module';
import { CountryHomeComponent } from './country-home.component';
import { CountryListComponent } from './country-list.component';
import { CountryEditComponent } from './country-edit.component';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, CountyRoutingModule,PageHeaderModule,StatModule,PaginationModule],
    declarations: [CountryHomeComponent, CountryListComponent, CountryEditComponent]
})
export class CountryModule {}
