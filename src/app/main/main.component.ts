import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Output() currentAddress = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  addNewAddress(address: any): void {
    this.currentAddress.emit(address);
  }

}
