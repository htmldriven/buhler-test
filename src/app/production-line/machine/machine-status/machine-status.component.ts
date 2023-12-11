import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MachineStatus } from '../../../common/type/production-line/machine-status';
import { MachineStatusToIconPipe } from '../../../common/pipe/production-line/machine-status-to-icon.pipe';
import { NgClass } from '@angular/common';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MachineStatusToIconPipe, NgClass],
  selector: 'app-machine-status',
  standalone: true,
  styleUrl: './machine-status.component.scss',
  templateUrl: './machine-status.component.html',
})
export class MachineStatusComponent {
  readonly machineStatus: typeof MachineStatus = MachineStatus;

  @Input({ required: true }) status: MachineStatus | undefined;
}
