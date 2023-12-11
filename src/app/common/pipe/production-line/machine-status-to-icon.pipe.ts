import { Pipe, PipeTransform } from '@angular/core';
import { MachineStatus } from '../../type/production-line/machine-status';

@Pipe({
  name: 'machineStatusToIcon',
  standalone: true,
})
export class MachineStatusToIconPipe implements PipeTransform {
  transform(value: MachineStatus): string {
    switch (value) {
      case MachineStatus.Alarm:
        return 'error_outline';

      case MachineStatus.Running:
        return 'settings_backup_restore';

      case MachineStatus.Warning:
        return 'warning';
    }
  }
}
