import { Component, EventEmitter, Output,Input } from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
    math = Math;
    @Output() pageTrigger = new EventEmitter<number>();

    @Input() pageSize: number;
    @Input() totalSize: number;
    page: number;

    constructor() {
        this.page = 1;
    }
    changePage(){
        this.pageTrigger.emit(this.page);
    }

}
