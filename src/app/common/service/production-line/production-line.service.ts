import { Injectable, Signal, signal } from '@angular/core';
import { Machine } from '../../type/production-line/machine';
import * as productionLineJson from '../../../../assets/data/production-line.json';

@Injectable({
  providedIn: 'root',
})
export class ProductionLineService {
  readonly machines: Signal<readonly Machine[]> = signal(
    productionLineJson.machines as readonly Machine[],
  );
}
