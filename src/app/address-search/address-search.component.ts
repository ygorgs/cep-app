import { Component, OnInit } from '@angular/core';
import { TextMaskModule } from 'angular2-text-mask';

import { AddressService } from '../services/address.service';

@Component({
  selector: 'app-address-search',
  templateUrl: './address-search.component.html',
  styleUrls: ['./address-search.component.css'],
  providers: [AddressService]
})
export class AddressSearchComponent implements OnInit {

  public cepMask = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

  cep: string;
  data: object;

  constructor(private addressService: AddressService) { }

  ngOnInit() { }

  searchCEP() {
    this.addressService.getAddress(this.cep).subscribe(result => {
      this.data = result;
    });
  }

}
