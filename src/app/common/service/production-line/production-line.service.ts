import { Injectable, Signal, signal } from '@angular/core';
import { Machine } from '../../type/production-line/machine';
import { Observable, map } from 'rxjs';
import { ProductionLine } from '../../type/production-line/production-line';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class ProductionLineService {
  readonly machines: Signal<readonly Machine[]> = toSignal(
    this.getProductionLine().pipe(
      map(
        (productionLine): readonly Machine[] => productionLine.machines || [],
      ),
    ),
    {
      initialValue: [],
    },
  );

  constructor(private readonly httpClient: HttpClient) {}

  getProductionLine(): Observable<ProductionLine> {
    return this.httpClient.get<ProductionLine>(
      '/assets/data/production-line.json',
    );
  }
}
