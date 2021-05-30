import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbAlertModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { StatModule ,PageHeaderModule,LoaderModule} from '../../shared';
import { ListComponent } from './components';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [CommonModule, NgbCarouselModule, NgbAlertModule, DashboardRoutingModule,PageHeaderModule,LoaderModule, StatModule],
    declarations: [DashboardComponent, ListComponent]
})
export class DashboardModule {}
