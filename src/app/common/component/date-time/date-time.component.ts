import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Signal,
  signal,
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
  @Input() format: Signal<DatePipeFormat> = signal(undefined);

  @Input({ required: true }) value: Signal<DatePipeValue> = signal(null);
}
