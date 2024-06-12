import { MachineStatus } from './machine-status';

export interface Machine {
  /**
   * Name of the icon as defined by material.
   *
   * @see https://fonts.google.com/icons
   */
  readonly icon: string;
  /**
   * UUID.
   */
  readonly id: string;
  /**
   * User-friendly name of the machine.
   */
  readonly name: string;
  /**
   * Current state of the machine.
   */
  readonly status: MachineStatus;
}
