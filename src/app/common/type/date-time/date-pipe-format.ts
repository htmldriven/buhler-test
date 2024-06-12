import { DatePipe } from '@angular/common';

/**
 * Shortcut for retrieving the type of the second argument
 * of the `DatePipe.transform()` method.
 */
export type DatePipeFormat = Parameters<DatePipe['transform']>['1'];
