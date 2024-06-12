import { Signal } from '@angular/core';

/**
 * Resolves signal read type from the given type `T`.
 */
export type ExtractSignalType<T> = T extends Signal<infer T> ? T : never;
