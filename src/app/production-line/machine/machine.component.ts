import {
  ChangeDetectionStrategy,
  Component,
  Input,
  booleanAttribute,
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
  readonly machineStatus: typeof MachineStatus = MachineStatus;

  @Input({ required: true }) machine: Machine | undefined;

  @Input({ transform: booleanAttribute }) iconDisabled: boolean = false;
}
