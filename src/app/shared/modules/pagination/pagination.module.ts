import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaginationComponent } from './pagination.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [CommonModule,NgbModule],
    declarations: [PaginationComponent],
    exports: [PaginationComponent]
})
export class PaginationModule {}

