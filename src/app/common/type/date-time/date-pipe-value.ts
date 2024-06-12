import { DatePipe } from '@angular/common';

/**
 * Shortcut for retrieving the type of the first argument
 * of the `DatePipe.transform()` method.
 */
export type DatePipeValue = Parameters<DatePipe['transform']>[0];
