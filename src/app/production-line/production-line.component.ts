import {
  ChangeDetectionStrategy,
  Component,
  InputSignal,
  input,
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
  //#region constants
  readonly productionLineMode: typeof ProductionLineMode = ProductionLineMode;
  //#endregion

  //#region inputs
  readonly mode: InputSignal<ProductionLineMode> =
    input.required<ProductionLineMode>();

  readonly machines: InputSignal<readonly Machine[]> =
    input.required<readonly Machine[]>();
  //#endregion
}
