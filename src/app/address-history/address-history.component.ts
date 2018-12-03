import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { Address } from '../entities/address';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-address-history',
  templateUrl: './address-history.component.html',
  styleUrls: ['./address-history.component.css']
})
export class AddressHistoryComponent implements OnInit, OnDestroy {

  /* Endereço a ser adicionado no histórico */
  @Input() address: EventEmitter<Address>;

  addressList: Address[];
  showHistory: boolean;

  /* Limite de endereços a serem exibidos no histórico */
  private LIMIT = 10;
  /* Nome das colunas da tabela de histórico */
  private displayedColumns = ['cep', 'logradouro', 'bairro', 'cidade', 'estado'];
  /* Lista de endereços exibidos na tabela */
  private dataSource = new MatTableDataSource<Address>();

  constructor() { }

  ngOnInit() {
    this.addressList = [];
    this.showHistory = false;
    this.address.subscribe(value => {
      if (value) {
        this.addNewAddress(value);
      }
    });
  }

  ngOnDestroy() {
    this.address.unsubscribe();
  }

  /**
   * Adiciona um novo endereço a lista de histórico
   *
   * @param address endereço a ser adicionado
   */
  addNewAddress(address: Address): void {
    if (this.addressList.length === this.LIMIT) {
      this.addressList.shift();
    }
    this.addressList.unshift(address);
    this.dataSource.data = this.addressList;
    this.showHistory = true;
  }

}
