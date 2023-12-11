import {
  ChangeDetectionStrategy,
  Component,
  WritableSignal,
  signal,
} from '@angular/core';
import { CurrentDateTimeComponent } from '../../../current-date-time/current-date-time.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CurrentDateTimeComponent],
  selector: 'app-header-info-section',
  standalone: true,
  styleUrl: './header-info-section.component.scss',
  templateUrl: './header-info-section.component.html',
})
export class HeaderInfoSectionComponent {
  readonly currentDateTimeFormat: CurrentDateTimeComponent['format'] =
    signal('dd.MM.YYYY HH:mm');

  readonly username: WritableSignal<string | null> = signal('Operator');
}
