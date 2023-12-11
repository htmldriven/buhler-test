import { DatePipe } from '@angular/common';

export type DatePipeValue = Parameters<DatePipe['transform']>[0];
