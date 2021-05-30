import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchModule,LoaderModule, PageHeaderModule,StatModule,PaginationModule,OnlyNumberDirective,AlertMsgModule,ThousandSuffixPipe } from '../../shared';


import { CountyRoutingModule } from './county-routing.module';
import { CountryHomeComponent } from './country-home.component';
import { CountryListComponent } from './country-list.component';
import { CountryEditComponent } from './country-edit.component';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule,AlertMsgModule,LoaderModule, CountyRoutingModule,PageHeaderModule,StatModule,PaginationModule,SearchModule],
    declarations: [CountryHomeComponent, CountryListComponent, CountryEditComponent,OnlyNumberDirective,ThousandSuffixPipe]
})
export class CountryModule {}
