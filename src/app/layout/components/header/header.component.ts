import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public pushRightClass: string;
    public collapsed: boolean = true;

    @Output() toggleEvent = new EventEmitter<boolean>();

    constructor() {}

    ngOnInit() {
        this.pushRightClass = 'push-right';
    }

    toggleCollapsed() {
        this.collapsed = !this.collapsed;
        this.toggleEvent.emit(this.collapsed);
        console.log(this.collapsed);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
        this.toggleEvent.emit(false);
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }
}
