export class Address {

  public logradouro: string;
  public bairro: string;
  public cidade: string;
  public estado: string;
  public cep: string;

  constructor(params: Partial<Address>) {
    Object.assign(this, params);
  }
}
