import { Machine } from './machine';

export interface ProductionLine {
  readonly machines: readonly Machine[];
}
