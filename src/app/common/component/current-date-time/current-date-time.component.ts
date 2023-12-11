import {
  ChangeDetectionStrategy,
  Component,
  Input,
  WritableSignal,
  signal,
} from '@angular/core';
import { DateTimeComponent } from '../date-time/date-time.component';
import { Observable, interval, tap, timer } from 'rxjs';
import { DatePipeValue } from '../../type/date-time/date-pipe-value';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DateTimeComponent],
  selector: 'app-current-date-time',
  standalone: true,
  styleUrl: './current-date-time.component.scss',
  templateUrl: './current-date-time.component.html',
})
export class CurrentDateTimeComponent {
  /**
   * It's probably not necessary to update at each second, but
   * rather every couple of seconds.
   */
  private static readonly dateTimeRefreshInterval: number = 5_000;

  @Input() format: DateTimeComponent['format'] = signal(undefined);

  readonly currentDateTime: WritableSignal<DatePipeValue> = signal(new Date());

  private readonly updateDateTime$: Observable<DatePipeValue> = interval(
    CurrentDateTimeComponent.dateTimeRefreshInterval,
  ).pipe(
    tap(() => {
      this.currentDateTime.set(new Date());
    }),
    takeUntilDestroyed(),
  );

  constructor() {
    this.updateDateTime$.subscribe();
  }
}
