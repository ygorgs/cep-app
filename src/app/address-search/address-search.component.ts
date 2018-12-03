import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { AddressService } from '../services/address.service';
import { RegionService } from 'src/app/services/region.service';
import { Address } from '../entities/address';

@Component({
  selector: 'app-address-search',
  templateUrl: './address-search.component.html',
  styleUrls: ['./address-search.component.css'],
  providers: [AddressService]
})
export class AddressSearchComponent implements OnInit {

  public cepMask = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

  cep: string;
  data: Address;

  @Output() emitAddress = new EventEmitter<Address>();

  constructor(private addressService: AddressService,
              private regionService: RegionService) { }

  ngOnInit() { }

  searchCEP() {
    this.addressService.getAddress(this.cep).subscribe(result => {
      this.data = new Address(result);
      this.emitAddress.emit(this.data);
    });

  }

  getRegionBackground() {
    if (this.data) {
      return this.regionService.getRegionColor(this.data['estado']);
    }
  }

}
