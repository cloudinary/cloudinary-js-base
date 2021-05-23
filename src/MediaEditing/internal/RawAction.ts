/**
 * @summary SDK
 * @memberOf SDK
 * @description Defines an action that's a string literal, no validations or manipulations are performed
 */
class RawAction {
  readonly raw: string;
  constructor(raw: string) {
    this.raw = raw;
  }

  toString(): string {
    return this.raw;
  }
}

export {RawAction};
