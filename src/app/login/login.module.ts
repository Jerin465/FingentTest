import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { AlertMsgModule } from './../shared/modules/alert-msg/alert-msg.module';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, LoginRoutingModule,NgbModule,AlertMsgModule],
    declarations: [LoginComponent]
})
export class LoginModule {}
