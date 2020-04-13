import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `

    <h2>{{"Hello "+parentData}}</h2>

    <!--
    <h2>{{"Hello Again "+name}}</h2>
    -->

    <button (click)="fireEvent()">Fire</button>

  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input() public parentData
  
  // or
  //@Input('parentData') public name

  @Output() public childEvent = new EventEmitter()
  
  constructor() { }

  ngOnInit(): void {
  }

  fireEvent(){
    this.childEvent.emit('Hello.. This is from Child')
  }

}
