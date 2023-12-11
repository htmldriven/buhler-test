import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Signal,
  signal,
} from '@angular/core';
import { MachineComponent } from './machine/machine.component';
import { ProductionLineMode } from '../common/type/production-line/production-line-mode';
import { Machine } from '../common/type/production-line/machine';
import { NgClass } from '@angular/common';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MachineComponent, NgClass],
  selector: 'app-production-line',
  standalone: true,
  styleUrl: './production-line.component.scss',
  templateUrl: './production-line.component.html',
})
export class ProductionLineComponent {
  readonly productionLineMode: typeof ProductionLineMode = ProductionLineMode;

  @Input({ required: true }) mode: Signal<ProductionLineMode> = signal(
    ProductionLineMode.Overview,
  );

  @Input({ required: true }) machines: Signal<readonly Machine[]> = signal([]);
}
