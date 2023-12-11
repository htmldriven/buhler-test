import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ProductionLineComponent } from '../../production-line/production-line.component';
import { ProductionLineMode } from '../../common/type/production-line/production-line-mode';
import { ProductionLineService } from '../../common/service/production-line/production-line.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProductionLineComponent],
  selector: 'app-production-line-page',
  standalone: true,
  styleUrl: './production-line-page.component.scss',
  templateUrl: './production-line-page.component.html',
})
export class ProductionLinePageComponent {
  readonly machines: ProductionLineComponent['machines'] =
    this.productionLineService.machines;

  readonly productionLineMode: ProductionLineComponent['mode'] = signal(
    ProductionLineMode.Overview,
  );

  constructor(private readonly productionLineService: ProductionLineService) {}
}
