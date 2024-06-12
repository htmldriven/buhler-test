import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  InputSignal,
  input,
} from '@angular/core';
import { DatePipeFormat } from '../../type/date-time/date-pipe-format';
import { DatePipeValue } from '../../type/date-time/date-pipe-value';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe],
  selector: 'app-date-time',
  standalone: true,
  styleUrl: './date-time.component.scss',
  templateUrl: './date-time.component.html',
})
export class DateTimeComponent {
  //#region inputs
  readonly format: InputSignal<DatePipeFormat> =
    input<DatePipeFormat>(undefined);

  readonly value: InputSignal<DatePipeValue> = input.required<DatePipeValue>();
  //#endregion
}
