import {
  ChangeDetectionStrategy,
  Component,
  InputSignal,
  InputSignalWithTransform,
  booleanAttribute,
  input,
} from '@angular/core';
import { MachineStatusComponent } from './machine-status/machine-status.component';
import { MachineStatus } from '../../common/type/production-line/machine-status';
import { Machine } from '../../common/type/production-line/machine';
import { NgClass } from '@angular/common';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MachineStatusComponent, NgClass],
  selector: 'app-machine',
  standalone: true,
  styleUrl: './machine.component.scss',
  templateUrl: './machine.component.html',
})
export class MachineComponent {
  //#region constants
  readonly machineStatus: typeof MachineStatus = MachineStatus;
  //#endregion

  //#region inputs
  readonly iconDisabled: InputSignalWithTransform<boolean, boolean | string> =
    input<boolean, boolean | string>(false, {
      transform: booleanAttribute,
    });

  readonly machine: InputSignal<Machine> = input.required();
  //#endregion
}
