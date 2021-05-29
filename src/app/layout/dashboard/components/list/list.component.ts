import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    @Input() title:String;
    @Input() data: Array<any> = [];


  constructor() { }

  ngOnInit(): void {
  }
  a(){
      console.log("jbb");

  }

}
