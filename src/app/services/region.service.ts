import { Injectable } from '@angular/core';

/** Enum relacionando o estádo com sua respectiva região. */
enum States {
  AC = 'norte',
  AL = 'nordeste',
  AP = 'norte',
  AM = 'norte',
  BA = 'nordeste',
  CE = 'nordeste',
  DF = 'centro-oeste',
  ES = 'sudeste',
  GO = 'centro-oeste',
  MA = 'nordeste',
  MT = 'centro-oeste',
  MS = 'centro-oeste',
  MG = 'sudeste',
  PA = 'norte',
  PB = 'nordeste',
  PR = 'sul',
  PE = 'nordeste',
  PI = 'nordeste',
  RJ = 'sudeste',
  RN = 'nordeste',
  RS = 'sul',
  RO = 'norte',
  RR = 'norte',
  SC = 'sul',
  SP = 'sudeste',
  SE = 'nordeste',
  TO = 'norte'
}

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor() { }

  /**
   * Retorna a corde referente a região do estada passado como parâmetro.
   *
   * @param state estado.
   */
  getRegionColor(state: string): string {
    switch (this.identifyRegion(state)) {
      case 'norte':
        return '#A1FFAD';
      case 'sul':
        return '#33B7FF';
      case 'sudeste':
        return '#EEEEEE';
      case 'nordeste':
        return '#FFB4D5';
      default:
        return '#FFBA3D';
    }
  }

  /**
   * Identifica a região do estado passado como parâmetro.
   *
   * @param state Estado.
   */
  identifyRegion(state: string): string {
    return States[state];
  }
}
