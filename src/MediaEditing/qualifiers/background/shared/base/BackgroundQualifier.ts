import {Qualifier} from "../../../../internal/qualifier/Qualifier";

/**
 * @description Defines the visual appearance of the background.
 * @memberOf Qualifiers.Background
 * @extends {SDK.Qualifier}
 */
class BackgroundQualifier extends Qualifier {
  constructor(backgroundValue?: string) {
    // The qualifier key for this qualifier
    super('b');

    // Such as color (b_red)
    if (backgroundValue) {
      this.addValue(backgroundValue);
    }
  }
}

export {BackgroundQualifier};
