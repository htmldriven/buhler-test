import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  signal,
} from '@angular/core';
import { ProductionLineService } from '../../../service/production-line/production-line.service';
import { ProductionLineComponent } from '../../../../production-line/production-line.component';
import { ProductionLineMode } from '../../../type/production-line/production-line-mode';
import { ExtractSignalType } from '../../../type/common/signal/extract-signal-type';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProductionLineComponent],
  selector: 'app-navigation',
  standalone: true,
  styleUrl: './navigation.component.scss',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent {
  readonly machines: Signal<
    ExtractSignalType<ProductionLineComponent['machines']>
  > = this.productionLineService.machines;

  readonly productionLineMode: Signal<
    ExtractSignalType<ProductionLineComponent['mode']>
  > = signal(ProductionLineMode.Navigation);

  constructor(private readonly productionLineService: ProductionLineService) {}
}
