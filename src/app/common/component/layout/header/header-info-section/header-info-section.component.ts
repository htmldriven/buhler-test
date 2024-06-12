import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  signal,
} from '@angular/core';
import { CurrentDateTimeComponent } from '../../../current-date-time/current-date-time.component';
import { ExtractSignalType } from '../../../../type/common/signal/extract-signal-type';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CurrentDateTimeComponent],
  selector: 'app-header-info-section',
  standalone: true,
  styleUrl: './header-info-section.component.scss',
  templateUrl: './header-info-section.component.html',
})
export class HeaderInfoSectionComponent {
  readonly currentDateTimeFormat: Signal<
    ExtractSignalType<CurrentDateTimeComponent['format']>
  > = signal('dd.MM.YYYY HH:mm').asReadonly();

  readonly username: Signal<string | null> = signal('Operator').asReadonly();
}
