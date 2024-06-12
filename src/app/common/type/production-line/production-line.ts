import { Machine } from './machine';

/**
 * Defines the production line structure.
 */
export interface ProductionLine {
  /**
   * List of all machines associated with the production line.
   */
  readonly machines: readonly Machine[];
}
