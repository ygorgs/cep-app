import { Component, OnInit } from '@angular/core';
import { TextMaskModule } from 'angular2-text-mask';

@Component({
  selector: 'app-address-search',
  templateUrl: './address-search.component.html',
  styleUrls: ['./address-search.component.css']
})
export class AddressSearchComponent implements OnInit {

  public cepMask = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

  cep: String;

  constructor() { }

  ngOnInit() { }

  searchCEP() {
    console.log(this.cep);
  }

}
