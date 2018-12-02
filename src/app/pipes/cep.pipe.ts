import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cep'
})
export class CepPipe implements PipeTransform {

  transform(value: string): string {
    return value.substring(0, 5) + '-' + value.substring(5, 8);
  }

}
