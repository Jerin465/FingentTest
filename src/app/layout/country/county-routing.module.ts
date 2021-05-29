import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryHomeComponent } from './country-home.component';
import { CountryListComponent } from './country-list.component';
import { CountryEditComponent } from './country-edit.component';

const routes: Routes = [
    {
        path: '',
        component: CountryHomeComponent,
        children: [
            { path: '', component: CountryListComponent },
            { path: 'edit/:id', component: CountryEditComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CountyRoutingModule {}
