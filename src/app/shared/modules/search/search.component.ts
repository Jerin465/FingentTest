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

    searchField: FormControl;

    constructor() {}

    ngOnInit(): void {
        this.searchField = new FormControl();
        this.searchField.valueChanges.pipe(debounceTime(400), distinctUntilChanged()).subscribe((input) => {
            this.searchEvent.emit(input);
        });
    }
}
