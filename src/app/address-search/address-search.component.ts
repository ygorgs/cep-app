import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';

import { AddressService } from '../services/address.service';
import { RegionService } from 'src/app/services/region.service';
import { Address } from '../entities/address';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-address-search',
  templateUrl: './address-search.component.html',
  styleUrls: ['./address-search.component.css'],
  providers: [AddressService]
})
export class AddressSearchComponent {

  /* Mascara usada no campo de busca de CEP */
  public cepMask = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

  cep: string;
  data: Address;

  /** Lança evento com o endereço encontrado */
  @Output() emitAddress = new EventEmitter<Address>();

  constructor(private addressService: AddressService,
    private regionService: RegionService,
    public dialog: MatDialog) { }

  /**
   * Realiza a busca por um determinado endereço através do CEP.
   */
  searchCEP() {
    this.addressService.getAddress(this.cep).subscribe(result => {
      this.data = new Address(result);
      this.emitAddress.emit(this.data);
    }, (error) => {
      this.dialog.open(DialogComponent, {
        data: {
          message: 'Não foi possível encontrar o endereço'
        }
      });
    });

  }

  /**
   * Retorna a cor a ser usada no background de acordo com a região.
   */
  getRegionBackground() {
    if (this.data) {
      return this.regionService.getRegionColor(this.data['estado']);
    }
  }

}
