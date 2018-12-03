import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  /* Endereço a ser adicionado no histórico. */
  @Output() currentAddress = new EventEmitter();

  constructor() { }

  /**
   * Envia um evento com o endereço a ser adicionado no histórico.
   *
   * @param address endereço buscado.
   */
  addNewAddress(address: any): void {
    this.currentAddress.emit(address);
  }

}
