import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertMsgComponent } from './alert-msg.component';

@NgModule({
    imports: [CommonModule],
    declarations: [AlertMsgComponent],

    exports: [AlertMsgComponent]
})
export class AlertMsgModule {}
