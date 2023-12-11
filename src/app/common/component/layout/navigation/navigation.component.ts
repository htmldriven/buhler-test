import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ProductionLineService } from '../../../service/production-line/production-line.service';
import { ProductionLineComponent } from '../../../../production-line/production-line.component';
import { ProductionLineMode } from '../../../type/production-line/production-line-mode';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProductionLineComponent],
  selector: 'app-navigation',
  standalone: true,
  styleUrl: './navigation.component.scss',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent {
  readonly machines: ProductionLineComponent['machines'] =
    this.productionLineService.machines;

  readonly productionLineMode: ProductionLineComponent['mode'] = signal(
    ProductionLineMode.Navigation,
  );

  constructor(private readonly productionLineService: ProductionLineService) {}
}
