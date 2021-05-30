import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    @Output() searchEvent: EventEmitter<any> = new EventEmitter();
    @Output() sortEvent: EventEmitter<any> = new EventEmitter();

    searchField: FormControl;
    sortField: FormControl;
    selectUndefinedOptionValue: any;

    constructor() {}

    ngOnInit(): void {
        this.searchField = new FormControl();
        this.sortField = new FormControl('');

        this.searchField.valueChanges.pipe(debounceTime(400), distinctUntilChanged()).subscribe((input) => {
            this.searchEvent.emit(input);
        });
    }
    valueChange($event){
        let input =$event.target.value
        this.sortEvent.emit(input);

      }
}
