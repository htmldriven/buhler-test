import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  signal,
} from '@angular/core';
import { ProductionLineComponent } from '../../production-line/production-line.component';
import { ProductionLineMode } from '../../common/type/production-line/production-line-mode';
import { ProductionLineService } from '../../common/service/production-line/production-line.service';
import { ExtractSignalType } from '../../common/type/common/signal/extract-signal-type';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProductionLineComponent],
  selector: 'app-production-line-page',
  standalone: true,
  styleUrl: './production-line-page.component.scss',
  templateUrl: './production-line-page.component.html',
})
export class ProductionLinePageComponent {
  readonly machines: Signal<
    ExtractSignalType<ProductionLineComponent['machines']>
  > = this.productionLineService.machines;

  readonly productionLineMode: Signal<
    ExtractSignalType<ProductionLineComponent['mode']>
  > = signal(ProductionLineMode.Overview).asReadonly();

  constructor(private readonly productionLineService: ProductionLineService) {}
}
