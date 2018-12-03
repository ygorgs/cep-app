import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient,
              @Inject('API') private API) { }

  /**
   * Realiza uma requisição para obter o endereço referente ao CEP passado como parâmetro
   *
   * @param cep CEP.
   */
  getAddress(cep: string): Observable<object> {
    const url: string = this.API.concat(cep);
    return this.http.get(url);
  }
}
