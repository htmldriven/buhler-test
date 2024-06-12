import {
  ChangeDetectionStrategy,
  Component,
  InputSignal,
  WritableSignal,
  input,
  signal,
} from '@angular/core';
import { DateTimeComponent } from '../date-time/date-time.component';
import { Observable, interval, tap } from 'rxjs';
import { DatePipeValue } from '../../type/date-time/date-pipe-value';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ExtractSignalType } from '../../type/common/signal/extract-signal-type';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DateTimeComponent],
  selector: 'app-current-date-time',
  standalone: true,
  styleUrl: './current-date-time.component.scss',
  templateUrl: './current-date-time.component.html',
})
export class CurrentDateTimeComponent {
  //#region constants
  /**
   * It's probably not necessary to update at each second, but
   * rather every couple of seconds.
   */
  private static readonly dateTimeRefreshInterval: number = 5_000;
  //#endregion

  //#region inputs
  readonly format: InputSignal<ExtractSignalType<DateTimeComponent['format']>> =
    input<ExtractSignalType<DateTimeComponent['format']>>(undefined);
  //#endregion

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
