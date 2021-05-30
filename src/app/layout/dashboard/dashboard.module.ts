import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbAlertModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { StatModule ,PageHeaderModule} from '../../shared';
import { ChatComponent, NotificationComponent, TimelineComponent,ListComponent } from './components';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [CommonModule, NgbCarouselModule, NgbAlertModule, DashboardRoutingModule,PageHeaderModule, StatModule],
    declarations: [DashboardComponent, TimelineComponent, NotificationComponent, ChatComponent, ListComponent]
})
export class DashboardModule {}
